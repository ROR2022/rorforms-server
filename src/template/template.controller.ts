import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { IFilter, TemplateService } from './template.service';
import { CreateTemplateDto } from './dto/create-template.dto';
import { UpdateTemplateDto } from './dto/update-template.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('template')
export class TemplateController {
  //eslint-disable-next-line
  constructor(private readonly templateService: TemplateService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createTemplateDto: CreateTemplateDto, @Req() req: any) {
    const user = req.user;
    createTemplateDto.author = user.id;
    //return {message: 'Creating template', data: createTemplateDto};
    return this.templateService.create(createTemplateDto);
  }

  @UseGuards(AuthGuard)
  @Get('copy/:id')
  copyTemplate(@Param('id') id: string, @Req() req: any){
    const user = req.user;
    return this.templateService.copyTemplate(id, user.id);
  }

  @UseGuards(AuthGuard)
  @Get('createForm/:id')
  createForm(@Param('id') id: string, @Req() req: any){
    const user = req.user;
    return this.templateService.copyTemplate(id, user.id, true);
  }

  @Post('filter')
  filter(@Body() filterTemplateDto: IFilter) {
    return this.templateService.filter(filterTemplateDto);
  }

  @Get()
  findAll() {
    return this.templateService.findAll();
  }

  @Get('allForms')
  findAllForms(){
    return this.templateService.findAllForms();
  }

  @Get('search/:search')
 async search(@Param('search') search: string){
    const result = await this.templateService.search(search);
    //console.log('controller result search:', result?.length);
    return result;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.templateService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTemplateDto: UpdateTemplateDto) {
    return this.templateService.update(id, updateTemplateDto);
  }

  @UseGuards(AuthGuard)
  @Patch('order/:id')
  updateOrderQuestions(@Param('id') id:string, @Body() listQuestions: string[]){
    return this.templateService.updateOrderQuestions(id, listQuestions);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.templateService.remove(id);
  }
}
