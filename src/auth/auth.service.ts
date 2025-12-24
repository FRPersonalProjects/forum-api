import { Inject, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    // todo: implementar servicos de autenticacao
    @Inject()
    private readonly userService: UserService;

    async signIn(params: Prisma.UserCreateInput
    ): Promise<Omit<User, 'password'>> { // retorna o usuario sem a senha para o retorno da funcao
    const user = await this.userService.findOne({ email: params.email }); // buscando usuario pelo email
    if (!user) // se usuario nao encontrado
      throw new NotFoundException('User not found'); 

    const passwordMatch: boolean = await bcrypt.compare(params.password, user.password); // comparando senhas
    if (!passwordMatch) // se senha nao bate
      throw new UnauthorizedException('Invalid credentials');

    const { password, ...result } = user; // removendo senha do objeto retornado, e o resto vai para result

    // todo: criar e retornar o jwt aqui

    return result;
  }
}
