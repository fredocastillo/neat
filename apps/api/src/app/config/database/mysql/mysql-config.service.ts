import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MysqlConfigService {
    constructor(private configService: ConfigService){}

    get user(): string {
        return this.configService.get<string>('mysql.user');
    }

    get password(): string{
        return this.configService.get<string>('mysql.password');
    }

    get host(): string {
        return this.configService.get<string>('mysql.host');
    }

    get port(): number{
        return this.configService.get<number>('mysql.port');
    }

    get database(): string {
        return this.configService.get<string>('mysql.database');
    }
}
