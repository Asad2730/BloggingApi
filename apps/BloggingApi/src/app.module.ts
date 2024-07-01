import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { BLOG_PACKAGE_NAME, BLOG_SERVICE_NAME } from '../blog';

@Module({
  imports: [
    ClientsModule.register([
      {
        name:BLOG_SERVICE_NAME,
        transport:Transport.GRPC,
        options:{
          package:BLOG_PACKAGE_NAME,
          protoPath:join(__dirname,'/proto/blog.proto')
        }
      }
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
