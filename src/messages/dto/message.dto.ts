import {User} from '../../users/schemas/user.schema';

type locationType = {
    latitude: number;
    longtitude: number;
}

type mediaType = {
    "@type": string;
    url: string;
}

type messageType = {
    location: locationType,
    media: mediaType,
    text: string,
    senderUser: User
}

export class CreateMessDto {
    message: messageType;
    receiverUser: User;
    readonly conversationId: string;
}

export class getMessDto {
    currentUser: string;
    conversationId: string;
}

export class UpdateMess {
    text: string;
    media: mediaType;
    idMess: string;
}