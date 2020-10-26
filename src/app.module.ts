import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {UserModule} from './users/user.module';
import {MessModule} from './messages/message.module';
import {AppGateway} from './socket/app.gateway';
import {ConverModule} from './converstion/conver.module';

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
  }),UserModule, MessModule, ConverModule],
  providers: [AppGateway],
})

export class AppModule {}
