import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp, or  } from "firebase/firestore";
import type { Chats } from "../Poshie-App/src/Types";


// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhVfADS0qHmevq6rTZ5a84lta4tFr98ZA",
  authDomain: "poshie-51fa8.firebaseapp.com",
  projectId: "poshie-51fa8",
  storageBucket: "poshie-51fa8.firebasestorage.app",
  messagingSenderId: "1074081194823",
  appId: "1:1074081194823:web:89f17d4d9095872f132262",
  measurementId: "G-6NC9ECVFG0"
};

export const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

async function SubmitMessage(chatroomID:string, chatPayload: Chats)
{
  console.log("Saying " + chatPayload.Edited_Message.substring(0,9) + "... to " + chatroomID + " from " + chatPayload.SpeakerID);
  let chatroomMsgRef = collection(db, "Chatrooms", chatroomID, "PAST_MESSAGES");
  chatPayload.UTCstamp = serverTimestamp()
  await addDoc(chatroomMsgRef, chatPayload)
}


const http = require('http').createServer();

const io = require('socket.io')(http, {
    cors: { origin: "*" }
});

io.on('connection', (socket: any) => {
    console.log('Someone connected: ' + socket.id);

    socket.on('message', async (chatroomID: string, message: Chats) => {
        console.log("Someone said " + message);
        message.Edited_Message = await convertText(message.Original_Message) 
        io.emit('message', `${socket.id.substr(0,5)} said ${message.Edited_Message}` );
        await SubmitMessage(chatroomID, message)
    });
});

async function spawnOllama(text: string): Promise<string> {
  const proc = Bun.spawn(
    ['ollama', 'run', 'Prickseek', text],
    { stdout: 'pipe', stderr: 'pipe' }
  );

  const [out, err, code] = await Promise.all([
    new Response(proc.stdout).text(),
    new Response(proc.stderr).text(),
    proc.exited
  ]);

  if (code !== 0) 
    console.error(`Ollama exited ${code} : ${err || out}`);

  return out.replace(/<\/?think>/g, '').trim();
}

async function convertText(original: string)
{
    return await spawnOllama(original);
}

console.log("Hello :)")
http.listen(8080, () => console.log('listening on http://localhost:8080') );
