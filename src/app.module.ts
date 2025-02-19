import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProverbModule } from './proverb/proverb.module';
import { Proverb } from './proverb/entities/Proverb';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT || '5432', 10),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [Proverb],
      synchronize: false,
    }),
    CacheModule.register({
      isGlobal: true,
      ttl: 60,
      max: 100,
    }),
    ProverbModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
