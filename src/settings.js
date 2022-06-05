import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";


const appId = "49fe7cd07c104befbef5e378106545c8"
const token = "00649fe7cd07c104befbef5e378106545c8IADnn7jEX4ez7c29LUamhgWkbiqREmy+zCX0qaGIfuVseeY/qboAAAAAEADBxArj55SXYgEAAQDnlJdi"



export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };



export const useClient = createClient(config);

export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();

export const channelname = "AgoraDocs";