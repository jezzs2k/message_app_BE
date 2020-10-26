import { Schema } from 'mongoose';

type membersType = {
    type: Schema.Types.ObjectId,
    ref: 'users',
}

export class CreateConverDto {
    admin: string;
    members: any;
    lastMess: string;
};