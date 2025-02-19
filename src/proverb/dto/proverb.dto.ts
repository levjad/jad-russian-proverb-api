import { ApiProperty } from '@nestjs/swagger';
import { Category } from '../enum/category.enum';

export class ProverbDto {
  @ApiProperty({
    example: 1,
    description: 'The unique identifier of the proverb',
  })
  id: number;

  @ApiProperty({
    example: 'Не откладывай на завтра то, что можно сделать сегодня.',
    description: 'The Russian proverb',
  })
  russianProverb: string;

  @ApiProperty({
    example: 'Do not put off till tomorrow what may be done today.',
    description: 'The English translation of the proverb',
  })
  englishTranslation: string;

  @ApiProperty({
    example: 'Explanation of the proverb meaning.',
    description: 'The meaning explanation of the proverb',
  })
  meaningExplanation: string;

  @ApiProperty({
    enum: Category,
    example: Category.WORK,
    description: 'The category of the proverb',
  })
  category: Category;

  constructor(partial: Partial<ProverbDto>) {
    Object.assign(this, partial);
  }
}
