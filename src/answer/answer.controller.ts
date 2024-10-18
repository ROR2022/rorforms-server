import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles.decorator';
import { ConfigService } from '@nestjs/config';

const myRoleAdmin = new ConfigService().get('ROLE_ADMIN') ?? 'admin';

@Controller('answer')
export class AnswerController {
  //eslint-disable-next-line
  constructor(private readonly answerService: AnswerService) {}

  @Post()
  create(@Body() createAnswerDto: CreateAnswerDto) {
    return this.answerService.create(createAnswerDto);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles([myRoleAdmin])
  @Get()
  findAll() {
    return this.answerService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get('byAuthor')
  findByAuthor(@Req() req: any) {
    const user = req.user;
    //console.log('findByAuthor user:', user);
    return this.answerService.findByAuthor(user.id);
  }

  @Get('deleteAll')
  deleteAll() {
    console.log('deleteAll Answers controller...');
    return this.answerService.deleteAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.answerService.findOne(id);
  }

  @Get('byTemplateId/:templateId')
  findByTemplateId(@Param('templateId') templateId: string) {
    return this.answerService.findByTemplateId(templateId);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnswerDto: UpdateAnswerDto) {
    return this.answerService.update(id, updateAnswerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.answerService.remove(id);
  }

  
}
