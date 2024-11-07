import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, Query } from '@nestjs/common';
import { IssueService } from './issue.service';
import { CreateIssueDto } from './dto/create-issue.dto';
import { UpdateIssueDto } from './dto/update-issue.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('issue')
export class IssueController {
  //eslint-disable-next-line
  constructor(private readonly issueService: IssueService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createIssueDto: CreateIssueDto, @Req() req: any) {
    const myUser: any  = req.user;
    const { id } = myUser;
    createIssueDto.userId = id;
    return this.issueService.create(createIssueDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll(
    @Req() req: any,
    @Query('page') page: string,
    @Query('limit') limit: string,
  ) {
    const myUser: any  = req.user;
    console.log('Issues Controller findAll:..',myUser);
    const { roles, email } = myUser;
    return this.issueService.findAll(roles, email, +page, +limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.issueService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIssueDto: UpdateIssueDto) {
    return this.issueService.update(id, updateIssueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.issueService.remove(id);
  }
}
