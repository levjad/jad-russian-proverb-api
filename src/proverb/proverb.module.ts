import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProverbController } from './proverb.controller';
import { ProverbService } from './proverb.service';
import { Proverb } from './entities/Proverb';

@Module({
  imports: [TypeOrmModule.forFeature([Proverb])],
  controllers: [ProverbController],
  providers: [ProverbService],
})
export class ProverbModule {}
