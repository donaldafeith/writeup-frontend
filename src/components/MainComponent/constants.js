// always use a random websocket generated by UUID
import uuid from "uuid/v4";

// PRODUCTION
export const WebSocketURL =
  "wss://open.senrigan.io/ws/writeup/gpt2_medium/session/" + uuid() + "/";

// PRODUCTION DUMMY SOCKET
//export const WebSocketURL =
//  "wss://open.senrigan.io/ws/test/writeup/gpt2_medium/session/writeup/";

// LOCAL DEVELOPER WS
//export const WebSocketURL =
//  "ws://127.0.0.1:8008/ws/writeup/gpt2_medium/session/" + uuid() + "/";
