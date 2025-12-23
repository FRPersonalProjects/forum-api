import { Inject, Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

// regras de negocio relacionadas ao usuario

@Injectable()
export class UserService {
  @Inject() // injetando o prisma service
  private readonly prisma: PrismaService; // criando uma propriedade prisma do tipo PrismaService

  async user( // metodo para buscar usuario unico
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> { // metodo para criar usuario
    return this.prisma.user.create({
      data,
    });
  } // todo: adicionar criptografia de senha

  async updateUser(params: { // metodo para atualizar usuario  
    where: Prisma.UserWhereUniqueInput; // id
    data: Prisma.UserUpdateInput; // dados para atualizar o usuario
  }): Promise<User> { // retorna o usuario atualizado
    const { where, data } = params; // desestruturando os parametros
    return this.prisma.user.update({ // atualizando o usuario 
      data, // dados para atualizar
      where, // id
    });
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> { // metodo para deletar usuario
    return this.prisma.user.delete({
      where, // id
    });
  }

}
