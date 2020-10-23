import {Schema, Prop, SchemaFactory, raw} from '@nestjs/mongoose';
import {Document,Schema as SchemaMongose} from 'mongoose';
import {User} from '../../users/schemas/user.schema';

export type MessDocument = Mess & Document;

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

@Schema({timestamps: true})
export class Mess {
    @Prop(raw({
        location: {
            longtitude: Number,
            latitude: Number,
        },
        media: {
            "@type": String,
            url: String,
        },
        text: String,
        senderUser: {
            type: SchemaMongose.Types.ObjectId, 
            ref: "users"
        }
    }))
    message: messageType

    @Prop(raw({
        type: SchemaMongose.Types.ObjectId,
        ref: 'users'
    }))
    receiverUser: string

    @Prop()
    conversationId: string

    @Prop(raw({
        type: SchemaMongose.Types.ObjectId,
        ref: 'messages'
    }))
    replyMessId: string
};

export const MessSchema = SchemaFactory.createForClass(Mess); 