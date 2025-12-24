import { Inject, Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import * as bcrypt from 'bcrypt';

// responsavel pelas regras de negocio relacionadas ao user, ex: CRUD de user, validacoes

/*
  create()
  findAll()
  findOne(id)
  update(id, dto)
  remove(id)
  */

@Injectable()
export class UserService {
  @Inject() // injetando o prisma service
  private readonly prisma: PrismaService; // criando uma propriedade prisma do tipo PrismaService

  // metodo para buscar usuario por id
  async findOne(userWhereUniqueInput: Prisma.UserWhereUniqueInput
  ): Promise<User | null> { // retorna o usuario encontrado ou null
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput // id do usuario
    });
  }

  // metodo para criar usuario
  async create(data: Prisma.UserCreateInput
  ): Promise<User> { // retorna o usuario criado
    const saltOrRounds = 10;
    const password = data.password;
    data.password = await bcrypt.hash(password, saltOrRounds);
    return this.prisma.user.create({ 
      data // dados do usuario para criar
    });
  }

  // metodo para atualizar usuario
  async update(params: { // metodo para atualizar usuario  
    where: Prisma.UserWhereUniqueInput; // id
    data: Prisma.UserUpdateInput; // dados para atualizar o usuario
  }): Promise<User> { // retorna o usuario atualizado
  /*       ou
  async updateUser(where: Prisma.UserWhereUniqueInput, data: Prisma.UserUpdateInput
  ): Promise<User> {                     */
    if (params.data.password) { // se senha for alterada, criptografar novamente
      const saltOrRounds = 10;
      const password = params.data.password;
      params.data.password = await bcrypt.hash(password, saltOrRounds);
    }
    const { where, data } = params; // mandando conteudo do params para where e data
    return this.prisma.user.update({ // atualizando o usuario 
      data, // dados para atualizar
      where // id
    });
  }

  // metodo para deletar usuario
  async delete(where: Prisma.UserWhereUniqueInput
  ): Promise<User> { // retorna o usuario deletado
    return this.prisma.user.delete({
      where // id
    });
  }

}
