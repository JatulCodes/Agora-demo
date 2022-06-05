import React from 'react'
import { useState, useEffect } from 'react'
import { channelname,config,useClient,useMicrophoneAndCameraTracks } from './settings';
import {Grid} from "@material-ui/core"
import Video from "./Video"
import Controls from './Controls';

const VideoCall = (props) => {
    const {setIncall}=props;
    const [users,setUser] = useState([]);
    const [Start,setStart] = useState(false);
    const client = useClient();
    const {ready , tracks}= useMicrophoneAndCameraTracks();


    useEffect(()=>{
        let init = async(name)=>{
            client.on("user-publised", async (user, mediaType)=>{
                await client.subscribe(user,mediaType);
                if (mediaType === "video"){
                    setUser((preUsers)=>{
                        return[...preUsers,user];

                    });
                }
                if(mediaType === "audio"){
                    user.audioTrack.play();
                }
            });
            client.on("user-unpublished",(user , mediaType)=>{
                if(mediaType === "audio"){
                  if(user.audioTrack) user.audioTrack.stop();  
                }
                if(mediaType === "video"){
                    setUser((preUsers)=>{
                        return preUsers.filter((User)=> User.uid !== user.uid); 
                    });

                }
            });


            client.on("user-left",(user)=>{
                setUser((preUsers)=>{
                    return preUsers.filter((User)=> User.uid !== user.uid); 
                });
            });
            try {
                await client.join(config.appId, name, config.token, null)
                
            } catch (err) {
                console.log(err);
            }

            if (tracks) await client.publish( [tracks[0], tracks[1]] );
            setStart(true);

        };
        if(ready && tracks){
            try {
                init(channelname);
            } catch (err) {
                console.log(err);
            }
        }
    },[channelname , client , ready , tracks])


  return (<Grid container direction = 'column' style = { {height:"100%"} }>
    <Grid item style={{height:"5%"}}>

        {ready && tracks && (
        <Controls 
        tracks={tracks} 
        setStart={setStart} 
        setIncall={setIncall}/>
        )}
        
    </Grid>
    <Grid item style={{ height:"95%" }}>
    { Start && tracks && (<Video tracks = {tracks} users={users}/>)}
    </Grid>
  </Grid>)
}

export default VideoCall;
