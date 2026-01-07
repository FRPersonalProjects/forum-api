import { Module, ValidationPipe } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { QuestionsModule } from './questions/questions.module';
import { AnswersModule } from './answers/answers.module';
import { APP_PIPE } from '@nestjs/core';

// modulo principal que importara outros modulos

@Module({
  imports: [AuthModule, 
    UserModule, 
    DatabaseModule, QuestionsModule, AnswersModule],
  providers: [
    {
      provide: APP_PIPE,
      useValue: ValidationPipe
    }
  ],
})
export class AppModule {}
