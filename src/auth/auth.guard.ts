import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
  import { JwtService } from '@nestjs/jwt';
  import { Request } from 'express';
  import { ConfigService } from '@nestjs/config';
  
  @Injectable()
  export class AuthGuard implements CanActivate {
    constructor(
      //eslint-disable-next-line
      private jwtService: JwtService,
      private configService: ConfigService,
    ) {}
  
    async canActivate(context: ExecutionContext): Promise<boolean> {
      const request = context.switchToHttp().getRequest();
      const token = this.extractTokenFromHeader(request);
      if (!token || token === 'null' || token === 'undefined') {
        
        throw new UnauthorizedException('You need to be authenticated to access this resource');
      }
      //console.log('Authguard token:',token);
      try {
        const payload = await this.jwtService.verifyAsync(
          token,
          {
            secret: this.configService.get('JWT_SECRET'),
          }
        );
        // 💡 We're assigning the payload to the request object here
        // so that we can access it in our route handlers
        request['user'] = payload;
      } catch {
        throw new UnauthorizedException('Error: Invalid token');
      }
      return true;
    }
  
    private extractTokenFromHeader(request: Request): string | undefined {
      const [type, token] = request.headers.authorization?.split(' ') ?? [];
      //console.log('Authguard token:',token);
      return type === 'Bearer' ? token : undefined;
    }
  }