import React from 'react'
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';


const VideoRoom = () => {

    const {roomId}=useParams()

    const myMeeting=async (element)=>{

        const appID = Number(import.meta.env.VITE_ZEGO_APP_ID);
        const serverSecret = import.meta.env.VITE_ZEGO_SECRET;
        
        const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(

            appID,
            serverSecret,
            roomId,
            Date.now().toString(),
            "ankitkr"

        )
        const zp = ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom({
            container: element,
            sharedLinks: [
              {
                name: 'copy link',
              
                  url: `http://localhost:5173/room/${roomId}`,
              },
            ],
            scenario: {
             mode: ZegoUIKitPrebuilt.VideoConference,
            //  mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
       });
      };
    
  return (
    <>
    <div ref={myMeeting}/>


    </>
  )
}

export default VideoRoom