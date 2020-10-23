import { Body, Controller, Res, Post, Get, Param } from '@nestjs/common';
import {UserService} from './user.service';
import {CreateUserDto} from './dto/user.dto';
import {response, Response} from 'express';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Post()
    async create(@Res() response: Response, @Body() createUser: CreateUserDto){
        const data = await this.userService.create(createUser);
        return response.jsonp({data: data});
    }

    @Get('/:id')
    async getById(@Res() response: Response, @Param() params){
        const user = await this.userService.getById(params?.id);

        return response.jsonp({data: user});
    }

    @Get()
    async getAll(@Res() response: Response){
        const users = await this.userService.getAll();

        return response.jsonp({data: users, total: users.length});
    }
}