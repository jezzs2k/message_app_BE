import { Model } from 'mongoose';
import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {ConverDocument, Conver} from './schemas/conver.schema';
import {CreateConverDto} from  './dto/conver.dto';

@Injectable()
export class ConverService {
    constructor(@InjectModel('conversations') private converModel: Model <ConverDocument>){};

    async createConver(createConver: CreateConverDto):Promise <Conver>{
        const conver = await this.converModel.findOne({
            $or: [{members: [...createConver.members]}]
        });

        if (conver) {
            return conver;
        }else{
            const newConver = new this.converModel(createConver);
            return newConver.save(); 
        };

        
    }

    async getConvers(targerId: string):Promise <Conver []>{
        const convers = await this.converModel.find({
            $or: [{admin: targerId}, {members: [targerId]}]
        }).populate(['members', 'admin', 'lastMess']);

        return convers;
    }
}