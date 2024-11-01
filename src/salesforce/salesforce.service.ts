import { Injectable } from '@nestjs/common';
import { InjectJsForce } from '@ntegral/nestjs-force';
import { Client } from '@ntegral/nestjs-force';
import * as jsforce from 'jsforce';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
//import axios from 'axios';

/* const myDomainName =
  'https://playful-moose-d164o3-dev-ed.trailblaze.my.salesforce.com';
const myInstanceUrl = 'https://marsystems-dev-ed.develop.my.salesforce.com';
 */

@Injectable()
export class SalesforceService {
    //eslint-disable-next-line
    
    
  constructor(
    //eslint-disable-next-line
    @InjectJsForce()
    private readonly client: Client,
    private configService: ConfigService,
  ) {
    
    
    
  }

  /**
   * 
   * POST /services/oauth2/token HTTP/1.1
     Host: MyDomainName.my.salesforce.com
     grant_type=client_credentials&
     client_id=*******************&
     client_secret=*******************

      query: {
    response_type: 'token',
    client_id: '3MVG98_Psg5cppyYCmk1gZNC25o00SXpgpodlS29IZ6pXiHkt3xuPa5qIjBTtEgdsiMuIWVN_8F0jnwEtbDh4',
    scope: 'api',
    redirect_uri: 'https://oauth.pstmn.io/v1/browser-callback'
  },
  // https://rorforms-server-production.up.railway.app

   */

  async listAccounts() {
    try {
      console.log('client:', this.client);
      const res = await this.client.conn.sobject('Account').find();
      console.log('Accounts:', res);
      //return res;
    } catch (error) {
      console.error('Error retrieving accounts:', error);
    }
  }

  async getAccounts() {
    const sfUserName = this.configService.get('SF_USERNAME');
    const sfPassword = this.configService.get('SF_PASSWORD');
    const sfToken = this.configService.get('SF_SECURITY_TOKEN');
    //const sfBasicLoginUrl = 'https://login.salesforce.com';

    //console.log('sfUserName:', sfUserName);
    //console.log('sfPassword:', sfPassword);
    //console.log('sfToken:', sfToken);
    const totalPass = sfPassword+sfToken;
    //console.log('totalPass:', totalPass);

    try {
        const conn = new jsforce.Connection({
            oauth2 : {
                // loginUrl : 'https://test.salesforce.com',
                clientId : this.configService.get('SF_CLIENT_ID'),
                clientSecret : this.configService.get('SF_CLIENT_SECRET'),
                redirectUri : 'https://oauth.pstmn.io/v1/browser-callback'
              }
          });
          const resLogin= await conn.login(sfUserName, totalPass);
            
      console.log('resLogin:', resLogin);
      conn.logout();
      
      
    } catch (error) {
      console.error('Error retrieving accounts:', error);
    }
  }

  async createAccount(dataBody: any) {
    const SF_ENDPOINT = this.configService.get('SF_ENDPOINT');
    const url = `${SF_ENDPOINT}/services/data/v62.0/sobjects/Account`;
    console.log('url:', url);
    console.log('dataBody:', dataBody);
    const { Name, Email, accessToken } = dataBody;
    const accountData = {
        Name,
        Email,
        };
    try {
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      const res = await axios.post(url, accountData);
      console.log('Created Account:', res);
      return res;
    } catch (error) {
      console.error('Error creating account:', error);
      return error;
    }
  }
}
