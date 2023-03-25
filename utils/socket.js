// import clientSocket from "socket.io-client";

// export const API_URL = "http://localhost:3010";
// const socket = clientSocket(`${API_URL}/recv_back`);

// export const subscribe = (newCallback) => {
//   socket.on("recv_back", (result) => {
//     result = JSON.parse(result);
//     newCallback(result);
//   });
// };

import { io } from "socket.io-client";

export const API_URL = "http://35.209.178.149:3010";
const socket = io(`${API_URL}/recv_back`);

export const subscribe = (newCallback) => {
  socket.on("recv_back", (result) => {
    console.log(result);
    // console.log(typeof result);
    const obj = JSON.parse(result);
    newCallback(obj);
  });
};
