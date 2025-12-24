import { Controller, Get, Post, Body, Patch, Param, Delete, Inject, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma, User as UserModel } from '@prisma/client';

@Controller('user')
export class UserController {
  @Inject()
  private readonly userService: UserService;

  // responsavel pelo gerenciamento das rotas de user

  /*
  create()
  findAll()
  findOne(id)
  update(id, dto)
  remove(id)
  */

  @Post() // rota para criar usuario - user/
  async create( // metodo para criar usuario
    @Body() userData: Prisma.UserCreateInput, // dados do usuario no corpo da requisicao
  ): Promise<UserModel> { // retorna o usuario criado
    return this.userService.create(userData); // chamando o metodo create do UserService
  }

  @Get(':id') // rota para buscar usuario por id - user/:id
  async findOne( // metodo para buscar usuario por id
    @Param('id') id: string // id do usuario nos parametros da requisicao
  ): Promise<UserModel | null> { // retorna o usuario encontrado ou null
    return this.userService.findOne({ id: Number(id) }); // chamando o metodo findOne do UserService
  }

  @Put(':id') // rota para atualizar usuario por id - user/:id
  async update( // metodo para atualizar usuario
    @Body() userData: Prisma.UserUpdateInput, // dados do usuario no corpo da requisicao
    @Param('id') id: string // id do usuario nos parametros da requisicao
  ): Promise<UserModel> { // retorna o usuario atualizado
    return this.userService.update({where: { id: Number(id) }, data: userData}); // chamando o metodo update do UserService
  }

  @Delete(':id') // rota para deletar usuario por id - user/:id
  async delete( // metodo para deletar usuario por id
    @Param('id') id: string // id do usuario nos parametros da requisicao
  ): Promise<UserModel> { // retorna o usuario deletado
    return this.userService.delete({ id: Number(id) }); // chamando o metodo delete do UserService
  }

}
