import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {ConverSchema} from './schemas/conver.schema';
import {ConverController} from './conver.controller';
import {ConverService} from './conver.service';

@Module({
    imports: [MongooseModule.forFeature([{name: 'conversations', schema: ConverSchema}])],
    controllers: [ConverController],
    providers: [ConverService],
})

export class ConverModule{};