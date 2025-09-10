import { reactive } from "vue";
import { io } from "socket.io-client";

export const state = reactive({
  connected: false,
  Messages: ['message']
});



export const socket = io("ws://localhost:8080");

socket.on("connect", () => {
  state.connected = true;
});

socket.on("disconnect", () => {
  state.connected = false;
});