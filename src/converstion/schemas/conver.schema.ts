import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import {Document, Schema as SchemaMongoose} from 'mongoose';

export type ConverDocument = Conver & Document;

@Schema({timestamps: true})
export class Conver {
    @Prop(raw([{
        type: SchemaMongoose.Types.ObjectId,
        ref: 'users'
    }]))
    members: string[];

    @Prop(raw({
        type: SchemaMongoose.Types.ObjectId,
        ref: 'users'
    }))
    admin:  string;

    @Prop(raw({
        type: SchemaMongoose.Types.ObjectId,
        ref: 'messages'
    }))
    lastMess: string;
};

export const ConverSchema = SchemaFactory.createForClass(Conver);