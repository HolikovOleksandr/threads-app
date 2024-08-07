import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get<string>('db.url'),
        // host: configService.get<string>('db.host'),
        // port: configService.get<number>('db.port'),
        // username: configService.get<string>('db.user'),
        // password: configService.get<string>('db.pass'),
        // database: configService.get<string>('db.name'),
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
