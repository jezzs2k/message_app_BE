import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import {UserModule} from './users/user.module';
import {MessModule} from './messages/message.module';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('config');

@Module({
  imports: [MongooseModule.forRootAsync({
    useFactory: async () => ({
      uri: config["Customer"]["MONGO_URI"],
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
  }),UserModule, MessModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
