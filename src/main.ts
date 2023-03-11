import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
async function bootstrap() {
  //this line create nest instance that contain our appmodule and which  conatain all the future comming module
  const app = await NestFactory.create(AppModule);
  //.env config
  dotenv.config();

  /*chill it's noting but swagger ui configuration
     start
  */
  const config = new DocumentBuilder()
    .setTitle('Employee Management Sytstem')
    .setDescription('Api description for ems')
    .setVersion('1')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  /*end swagger config*/
  app.enableCors();
  //this is our server port no localhost:5000
  await app.listen(5000);
}
bootstrap();
