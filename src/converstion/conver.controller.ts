import {Body, Controller, Res, Post, Get, Param} from '@nestjs/common';
import {Response} from 'express';
import {CreateConverDto} from './dto/conver.dto';
import {ConverService} from './conver.service';

@Controller('/convers')
export class ConverController {
    constructor(private readonly converService: ConverService){}

    @Post()
    async createConver(@Res() response: Response , @Body() createConver: CreateConverDto) {
        const conver = await this.converService.createConver(createConver);

        return response.jsonp({data: {
            retrived: conver
        }})
    }

    @Get('/:targetId')
    async getConvers(@Res() response: Response , @Param() params) {
        const convers = await this.converService.getConvers(params.targetId);

        return response.jsonp({data: {
            retrived: convers,
            total: convers.length
        }})
    }
}