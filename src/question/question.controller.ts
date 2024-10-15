import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('question')
export class QuestionController {
  //eslint-disable-next-line
  constructor(private readonly questionService: QuestionService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createQuestionDto: CreateQuestionDto) {
    const {templateId} = createQuestionDto;
    if(!templateId){
      throw new Error('TemplateId is required');
    }
    return this.questionService.create(createQuestionDto);
  }

  @Get()
  findAll() {
    return this.questionService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get('template/:templateId')
  findByTemplateId(@Param('templateId') templateId: string) {
    return this.questionService.findByTemplateId(templateId);
  }

  @Get('templateNoToken/:templateId')
  findByTemplateIdNoToken(@Param('templateId') templateId: string) {
    return this.questionService.findByTemplateId(templateId);
  }

  @UseGuards(AuthGuard)
  @Get('deleteByTemplateId/:templateId')
  deleteByTemplateId(@Param('templateId') templateId: string) {
    return this.questionService.deleteByTemplateId(templateId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuestionDto: UpdateQuestionDto) {
    return this.questionService.update(id, updateQuestionDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questionService.remove(id);
  }
}
