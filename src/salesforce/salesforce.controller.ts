import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { SalesforceService } from './salesforce.service';

@Controller('salesforce')
export class SalesforceController {
  constructor(private readonly salesforceService: SalesforceService) {}

  @Get('accounts')
  async getAccounts() {
    //return this.salesforceService.getAccounts();
    return this.salesforceService.getAccounts();
  }

    @Get('testAuth')
    async test(@Req() req:any) {
        console.log('req:', req);
      //return this.salesforceService.testAuth();
    }

    @Post('createAccount')
    async createAccount(@Body() body: any) {
        //console.log('req:', req);
      return this.salesforceService.createAccount(body);
    }
}
