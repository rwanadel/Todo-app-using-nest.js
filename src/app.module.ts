import {
  HttpException,
  MiddlewareConsumer,
  Module,
  NestModule,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { TodosModule } from './todos/todos.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { APP_FILTER } from '@nestjs/core';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/todo-app'),
    UserModule,
    TodosModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, { provide: APP_FILTER, useClass: HttpException }],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply().forRoutes('/api/v1/users/*');
    consumer.apply().forRoutes('/api/v1/todos/*');
    consumer.apply().forRoutes('/api/v1/auth/*');
  }
}
