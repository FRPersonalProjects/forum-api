import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

// modulo principal que importara outros modulos

@Module({
  imports: [AuthModule, UserModule],
})
export class AppModule {}
