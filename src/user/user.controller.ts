import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma, User as UserModel } from '@prisma/client';

@Controller('user')
export class UserController {
  @Inject()
  private readonly userService: UserService;

  @Post('signup') // rota para criar usuario - user/signup
  async signupUser( // metodo para criar usuario
    @Body() userData: Prisma.UserCreateInput, // dados do usuario no corpo da requisicao
  ): Promise<UserModel> { // retorna o usuario criado
    return this.userService.createUser(userData); // chamando o metodo createUser do UserService
  }

}
