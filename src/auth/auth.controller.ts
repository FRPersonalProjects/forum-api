import { Body, Controller, Inject, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    @Inject()
    private readonly authService: AuthService;

    // responsavel pelo gerenciamento das rotas de autenticacao

    /*
    signIn()
    signUp()
    */

    // metodo para login
    @Post('signin') // rota para login - auth/signin
    async signIn(@Body() body: Prisma.UserCreateInput) { // rota para login - auth/signin // qual o tipo do body? // Prisma.UserCreateInput
        return this.authService.signIn(body);
        // maria ss22
    }
}
