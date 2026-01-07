import { Controller, Get, Post, Body, Patch, Param, Delete, Inject, Put, UseGuards, ParseIntPipe, HttpStatus, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

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
    @Body(new ValidationPipe()) createUserDto: CreateUserDto, // dados do usuario no corpo da requisicao
  ): Promise<UserModel> { // retorna o usuario criado
    return this.userService.create(createUserDto); // chamando o metodo create do UserService
  }

  @UseGuards(AuthGuard)
  @Get(':id') // rota para buscar usuario por id - user/:id
  async findOne( // metodo para buscar usuario por id
    @Param('id',ParseIntPipe) id: number // id do usuario nos parametros da requisicao
  ): Promise<Omit<UserModel, 'password'> | null> { // retorna o usuario encontrado ou null
    return this.userService.findOne({ id }); // chamando o metodo findOne do UserService
  }

  @UseGuards(AuthGuard)
  @Patch(':id') // rota para atualizar usuario por id - user/:id
  async update( // metodo para atualizar usuario
    @Body(new ValidationPipe()) updateUserDto: UpdateUserDto, // dados do usuario no corpo da requisicao
    @Param('id',ParseIntPipe) id: number // id do usuario nos parametros da requisicao
  ): Promise<UserModel> { // retorna o usuario atualizado
    return this.userService.update({where: { id }, data: updateUserDto}); // chamando o metodo update do UserService
  }

  @UseGuards(AuthGuard)
  @Delete(':id') // rota para deletar usuario por id - user/:id
  async delete( // metodo para deletar usuario por id
    @Param('id',ParseIntPipe) id: number // id do usuario nos parametros da requisicao
  ): Promise<UserModel> { // retorna o usuario deletado
    return this.userService.delete({ id }); // chamando o metodo delete do UserService
  }

}
