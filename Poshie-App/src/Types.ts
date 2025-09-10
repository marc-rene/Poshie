import type { FieldValue } from "firebase/firestore";

export interface Chatroom {
    id: string;
    Nickname?: string;
    Users: string[];
}

export interface Username {
    id: string;
    Username: string;
}

export interface Chats {
    UTCstamp?: FieldValue;
    SpeakerID?: string;
    Original_Message: string;
    Edited_Message: string;
}