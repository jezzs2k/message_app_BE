import { Body, Controller, Res, Post, Get, Param, Delete, Put } from '@nestjs/common';
import {Response} from 'express';
import { CreateMessDto, getMessDto, UpdateMess } from './dto/message.dto';
import {MessService} from './message.service';

@Controller('messages')
export class MessController {
    constructor(private readonly messService: MessService){}

    @Post()
    async sendMess(@Res() response: Response, @Body() createMess: CreateMessDto){
        const mess = await this.messService.sendMess(createMess);

        return response.jsonp({data: mess});
    }

    @Get()
    async getMessages(@Res() response: Response, @Body() infoMess: getMessDto){
        const messages = await this.messService.getMess(infoMess);

        return response.jsonp({data: {messages}, total: messages.length});
    }

    @Delete('/:idMess')
    async deleteMess (@Res() response: Response, @Param() params){
        const mess = await this.messService.deleteMess(params?.idMess);

        return response.jsonp({data: {message: mess}})
    }

    @Put()
    async updateMess (@Res() response: Response, @Body() updateMess: UpdateMess){
        const mess = await this.messService.updateMess(updateMess);

        return response.jsonp({data: {message: mess}})
    }
}