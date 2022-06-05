import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const videoCallAppId = "6b9bb2951abc4b75882dac9f896a0895";
// Expire token in 24 hours
const videoCallToken = "0066b9bb2951abc4b75882dac9f896a0895IABX3g0gz+BjIFxJ8HTxs4d4Ffgknrkoh4/r7jWTEos1vSj1Br0AAAAAEACXVkQudtKZYgEAAQB20pli";

const audioCallAppId = "610bc9f011cd4d7195b0952d3700f767";
// Expire token in 24 hours
const audioCallToken = "006610bc9f011cd4d7195b0952d3700f767IAAPJS1NlBAtYRHTQkrusIptsV6LzZ22qbpNXgskGBMYvZEZvNkAAAAAEACXVkQulJiZYgEAAQCUmJli";

export const videoCallConfig = { mode: "rtc", codec: "vp8", appId: videoCallAppId, token: videoCallToken };
export const audioCallConfig = { mode: "rtc", codec: "vp8", appId: audioCallAppId, token: audioCallToken };

export const useVideoCallClient = createClient(videoCallConfig);
export const useAudioCallClient = createClient(audioCallConfig);

export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();

export const videoCallChannelName = "Video";
export const audioCallChannelName = "Audio";
