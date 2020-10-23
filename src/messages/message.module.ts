import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {MessSchema} from './schemas/message.schemas';
import {MessController} from './message.controller';
import {MessService} from './message.service';


@Module({
    imports: [MongooseModule.forFeature([{name: 'messages', schema: MessSchema}])],
    controllers: [MessController],
    providers: [MessService],
})

export class MessModule{}