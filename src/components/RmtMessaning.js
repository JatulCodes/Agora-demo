import React from 'react'

import AgoraRTM from 'agora-rtm-sdk'

const RmtMessaning = () => {


    let appID= "65a0eb9dac8c430ba58753e06b0ca224"
    let uid= String(Math.floor(Math.random() * 232))
    let token= null;
    let channelName ="main"        

    let initiateRTM = async ()=>{
        let client = await AgoraRTM.createInstance(appID)
        await client.login({uid,token})
    
        const channel = await client.createChannel(channelName)
        await channel.join()
    
        let form = document.getElementById("form")
    
        form.addEventListener("submit" , async(e) => {
            e.preventDefault()
            let message = e.target.message.value
            await channel.sendMessage({ text : message , type:'text'})
            form.reset()
            // console.log(message);
            handleMessage({text:message})
        })
    
        channel.on('ChannelMessage', (message , peerId)=>{
            console.log("Message",message);
            handleMessage(message)    
        })
         
    } 
    
    let handleMessage = async (message) =>{
        let messages = document.getElementById("messages")
        let messageElement = `<p>${message.text}</p>`
        messages.insertAdjacentHTML('beforeend' , messageElement)
    }
    initiateRTM()


  return (
    <>
    <form id="form">

                <input type="text" name="message"/>
    </form>

                <div id="messages"></div>

    </>
  )
}

export default RmtMessaning;
