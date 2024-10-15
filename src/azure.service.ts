import { Injectable, Inject } from '@nestjs/common';
import { BlobServiceClient } from '@azure/storage-blob';
import { ConfigService } from '@nestjs/config';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
//import { v4 as uuidv4 } from 'uuid';
//const myContainerName = process.env.AZURE_CONTAINER_NAME;
//const myConnectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;


//console.log('myContainerName:', myContainerName);
@Injectable()
export class AzureStorageService {
    //eslint-disable-next-line
  private blobServiceClient: BlobServiceClient;
  private containerClient:any;
  //private logger = new Logger('AzureStorageService');

  constructor(
    private configService: ConfigService,
    @Inject(WINSTON_MODULE_PROVIDER) private logger: Logger,
  ) {
    const myContainerName = this.configService.get('AZURE_CONTAINER_NAME');
    const myConnectionString = this.configService.get('AZURE_STORAGE_CONNECTION_STRING');
    //console.log('myContainerName:', myContainerName);
    //console.log('myConnectionString:', myConnectionString);
    this.blobServiceClient = BlobServiceClient.fromConnectionString(myConnectionString);
    this.containerClient = this.blobServiceClient.getContainerClient(myContainerName);
    //console.log('AzureStorageService initialized');
    //console.log('Container:', this.containerClient);
    //console.log('BlobServiceClient:', this.blobServiceClient);
    //this.logger.error('AzureStorageService initialized');
  }

  async uploadImage(file: Express.Multer.File): Promise<string> {
    try {
      //console.log('init uploadfile AzureService:', file);
    const blobName = `${this.createUniqueID()}${file.originalname}`;
    //console.log('blobName:', blobName);
    const blockBlobClient = this.containerClient.getBlockBlobClient(blobName);
    //console.log('blockBlobClient:', blockBlobClient);

    //const uploadBlobResponse = 
    await blockBlobClient.uploadData(file.buffer);
    //console.log(`Upload block blob ${blobName} successfully`, uploadBlobResponse.requestId);
    //console.log('URL:', blockBlobClient.url);
    //console.log('resUploadFile:', resUploadFile);

    
    const imageUrl = blockBlobClient.url;
    if(imageUrl){
      this.logger.warn(`Upload block blob ${blobName} successfully`);
      return imageUrl;
    }else{
      this.logger.error(`Upload block blob ${blobName} failed`);
      return '';
    }
    } catch (error) {
      this.logger.error(`Upload block blob failed: ${error}`);
      throw new Error('Upload block blob failed');
    }
  }

  createUniqueID(): string {
    const base='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let id = '';
    for (let i = 0; i < 24; i++) {
      id += base.charAt(Math.floor(Math.random() * base.length));
    }
    return id;
  }
}
