import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {User, UserDocument} from './schemas/user.schema';
import {CreateUserDto} from './dto/user.dto';

@Injectable()
export class UserService{
    constructor(@InjectModel('users') private userModel: Model<UserDocument>){}

    async create(CreateUser: CreateUserDto): Promise<User> {
        const createUser = new this.userModel(CreateUser);
        return createUser.save();
    }

    async getById (id: string): Promise<User> {
        const user = this.userModel.findById(id);

        return user;
    }

    async getAll (): Promise<User []> {
        const users = this.userModel.find();

        return users;
    }
}