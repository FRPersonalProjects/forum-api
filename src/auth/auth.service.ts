import { Inject, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {

    @Inject()
    private readonly userService: UserService;

    @Inject()
    private readonly jwtService: JwtService; // injetando o servico de jwt

    // servico responsavel pela autenticacao dos usuarios

    // metodo para login
    async signIn(params: Prisma.UserCreateInput // parametros: email e password
    ): Promise<{ access_token: string }> { // retorna o token de acesso
    const user = await this.userService.findOne({ email: params.email }); // buscando usuario pelo email
    if (!user) // se usuario nao encontrado
      throw new NotFoundException('User not found'); 

    const passwordMatch: boolean = await bcrypt.compare(params.password, user.password); // comparando senha de login com cadastrada
    if (!passwordMatch) // se senha nao bate
      throw new UnauthorizedException('Invalid credentials');

    const payload = { user: user.id }; // criando payload para o jwt

    return { access_token: await this.jwtService.signAsync(payload) };
  }
}
