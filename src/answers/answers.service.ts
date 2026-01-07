import { Inject, Injectable } from '@nestjs/common';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class AnswersService {

  @Inject()
  private readonly prisma: PrismaService;

  async create(createAnswerDto: CreateAnswerDto, req: any, questionId: number) {
    const newAnswer = {
      body: createAnswerDto.body,
      user: { 
        connect: { id: req.userId }
      },
      question: { 
        connect: { id: questionId }
      }
    }
    return await this.prisma.answers.create({
      data: newAnswer
    });
  /*
  O metodo create cria uma nova resposta no banco de dados.
  Ele recebe um objeto createAnswerDto que contem o corpo da resposta.
  O userId e questionId sao usados para associar a resposta ao usuario e a questao correta.
  A estrutura do newAnswer usa a funcionalidade de relacionamentos do Prisma para conectar a resposta ao usuario e questao existentes.
  Finalmente, o metodo retorna a resposta criada.
  */
  }

  async findAll() {
    return await this.prisma.answers.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.answers.findUnique({
      where: { id }
    });
  }

  async update(id: number, updateAnswerDto: UpdateAnswerDto) {
    return await this.prisma.answers.update({
      where: { id },
      data: updateAnswerDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.answers.delete({
      where: { id }
    });
  }
}
