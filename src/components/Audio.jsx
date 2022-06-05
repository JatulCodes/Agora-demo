import { AgoraVideoPlayer } from "agora-rtc-react";
import { Grid } from "@material-ui/core";
import { useState, useEffect } from "react";

const Audio = (props) => {
  const { users, tracks } = props;
  const [gridSpacing, setGridSpacing] = useState(12);

  useEffect(() => {
    setGridSpacing(Math.max(Math.floor(12 / (users.length + 1)), 4));
    tracks[1].close();
  }, [users, tracks]);

  return (
    <Grid container style={{ height: "100%" }}>
      <Grid item xs={gridSpacing}>
        <AgoraVideoPlayer videoTrack={tracks[0]} style={{ height: "100%", width: "100%", border: "1px solid black" }} />
      </Grid>
      {users.length > 0 &&
        users.map((user) => {
          if (user.videoTrack) {
            return (
              <Grid item xs={gridSpacing} key={user.uid}>
                <AgoraVideoPlayer videoTrack={user.videoTrack} style={{ height: "100%", width: "100%", border: "1px solid black" }} />
              </Grid>
            );
          } else return null;
        })}
    </Grid>
  );
};

export default Audio;
