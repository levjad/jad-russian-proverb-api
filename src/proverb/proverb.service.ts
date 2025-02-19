import { Inject, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Proverb } from './entities/Proverb';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { Cacheable } from '../decorator/cache.decorator';
import { Category } from './enum/category.enum';

@Injectable()
export class ProverbService {
  private readonly logger = new Logger('# ' + ProverbService.name);

  constructor(
    @InjectRepository(Proverb)
    private proverbRepository: Repository<Proverb>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {
    this.logger.log('Cache Manager initialized: ' + !!this.cacheManager);
  }

  @Cacheable()
  async getRandomProverb(): Promise<Proverb | null> {
    this.logger.log('Fetching random proverb...');

    return this.proverbRepository
      .createQueryBuilder('proverb')
      .orderBy('RANDOM()')
      .getOne();
  }

  @Cacheable()
  async getProverbById(id: number): Promise<Proverb | null> {
    this.logger.log('Fetching proverb by id...');
    return this.proverbRepository.findOne({ where: { id } });
  }

  @Cacheable()
  async getProverbsByCategory(category: Category): Promise<Proverb[]> {
    this.logger.log('Fetching proverb by category...');
    return this.proverbRepository.find({ where: { category } });
  }
}
