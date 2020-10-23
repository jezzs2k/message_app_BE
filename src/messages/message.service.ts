import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Mess, MessDocument} from './schemas/message.schemas';
import {CreateMessDto, getMessDto, UpdateMess} from './dto/message.dto';

@Injectable()
export class MessService {
    constructor(@InjectModel('messages') private messModel: Model <MessDocument>){}

    async sendMess(createMessDto: CreateMessDto):Promise <Mess>{
        const createMess = new this.messModel(createMessDto);
        return createMess.save();
    }

    async getMess(infoMess: getMessDto) :Promise <Mess[]>{
        const messages = await this.messModel.find({
            conversationId: infoMess.conversationId
        }).populate(['receiverUser', 'message.senderUser', 'replyMessId']);

        return messages;
    }

    async deleteMess (idMess: string) : Promise <Mess> {
        const message = await this.messModel.findByIdAndDelete(idMess);

        return message;
    }

    async updateMess (updateMess: UpdateMess) :Promise <Mess> {
        const messageCurrent = await this.messModel.findOne({
            _id: updateMess.idMess            
        });

        if(updateMess.text) messageCurrent.message.text = updateMess.text;
        if(updateMess.media) messageCurrent.message.media = updateMess.media;

        return messageCurrent.save();
    }

}
