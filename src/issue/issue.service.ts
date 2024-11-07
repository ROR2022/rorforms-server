import { Inject, Injectable } from '@nestjs/common';
import { CreateIssueDto } from './dto/create-issue.dto';
import { UpdateIssueDto } from './dto/update-issue.dto';
import { PaginateModel } from 'mongoose';
import { Issue } from './entities/issue.entity';

@Injectable()
export class IssueService {

  constructor(
    //eslint-disable-next-line prettier/prettier
    @Inject('ISSUE_MODEL')
    private issueModel: PaginateModel<Issue>,
  ) {}

  create(createIssueDto: CreateIssueDto) {
    //return 'This action adds a new issue';
    const createdIssue = new this.issueModel(createIssueDto);
    return createdIssue.save();
  }

  findAll(roles: Array<string>, email: string, page: number, limit: number) {
    
    const isAdmin = roles.includes('admin');
    const options = {
      page: page || 1,
      limit: limit || 10,
      sort: { createdAt: -1 },
      lean: true,
    };
    if (isAdmin) {
      const query = {};
      return this.issueModel.paginate(query, options);
    }else{
      const query = { userEmail: email };
      return this.issueModel.paginate(query, options);
    }
    
  }

  findOne(id: string) {
    //  return `This action returns a #${id} issue`;
    return this.issueModel.findById(id).exec();
  }

  update(id: string, updateIssueDto: UpdateIssueDto) {
    //return `This action updates a #${id} issue`;
    return this.issueModel.findByIdAndUpdate(id, updateIssueDto, {new:true}).exec();
  }

  remove(id: string) {
    //return `This action removes a #${id} issue`;
    return this.issueModel.findByIdAndDelete(id).exec();
  }
}
