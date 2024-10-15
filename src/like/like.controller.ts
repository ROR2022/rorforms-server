import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LikeService } from './like.service';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';

@Controller('like')
export class LikeController {
  // eslint-disable-next-line
  constructor(private readonly likeService: LikeService) {}

  @Post()
  create(@Body() createLikeDto: CreateLikeDto) {
    return this.likeService.create(createLikeDto);
  }

  @Get()
  findAll() {
    return this.likeService.findAll();
  }

  @Get('template/:templateId')
  findByTemplateId(@Param('templateId') templateId: string) {
    return this.likeService.findByTemplateId(templateId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.likeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLikeDto: UpdateLikeDto) {
    console.log('controller updateLikeDto', updateLikeDto);
    return this.likeService.update(id, updateLikeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.likeService.remove(id);
  }
}
