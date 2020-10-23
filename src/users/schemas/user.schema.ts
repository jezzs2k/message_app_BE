import {Schema, Prop, SchemaFactory, raw} from '@nestjs/mongoose';
import {Document} from 'mongoose';

export type UserDocument = User & Document;

type locationType = {
    latitude: number;
    longtitude: number;
}

type avatarType = {
    "@type": string;
    url: string;
    createAt: string;
}

@Schema({timestamps: true})
export class User {
    @Prop()
    first_name: string;

    @Prop()
    last_name: string;

    @Prop({required: true})
    full_name: string;

    @Prop({required: true})
    email: string;

    @Prop({required: true})
    phone_number: string;

    @Prop(raw({
        longtitude: Number,
        latitude: Number
    }))
    location: locationType

    @Prop(raw({
        "@type": String,
        url: String,
        createAt: String
    }))
    avatar: avatarType
};

export const UserSchema = SchemaFactory.createForClass(User); 