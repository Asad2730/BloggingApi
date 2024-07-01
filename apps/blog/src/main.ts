import { NestFactory } from '@nestjs/core';
import { BlogModule } from './blog.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { BLOG_PACKAGE_NAME } from '../blog';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(BlogModule,{
    transport:Transport.GRPC,
    options:{
      package:BLOG_PACKAGE_NAME,
      protoPath:join(__dirname,'/proto/blog.proto')
    }
  });
  await app.listen();
}
bootstrap();
