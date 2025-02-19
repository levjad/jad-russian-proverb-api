import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ProverbService } from './proverb.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ProverbDto } from './dto/proverb.dto';
import { Category } from './enum/category.enum';

@Controller('proverbs')
export class ProverbController {
  constructor(private readonly proverbService: ProverbService) {}

  @Get('random')
  @ApiOperation({ summary: 'Get a random proverb' })
  @ApiResponse({
    status: 200,
    description: 'Get random proverb',
    type: ProverbDto,
  })
  async getRandomProverb(): Promise<ProverbDto> {
    const proverb = await this.proverbService.getRandomProverb();

    if (!proverb) {
      throw new NotFoundException(`No proverb found`);
    }

    return new ProverbDto(proverb);
  }

  @ApiOperation({ summary: 'Get a specific proverb by id' })
  @ApiResponse({
    status: 200,
    description: 'Get a specific proverb by id',
    type: ProverbDto,
  })
  @Get('specific/:id')
  async getProverbById(@Param('id') id: number): Promise<ProverbDto> {
    const proverb = await this.proverbService.getProverbById(id);

    if (!proverb) {
      throw new NotFoundException(`No proverb with ID ${id} found`);
    }

    return new ProverbDto(proverb);
  }

  @ApiOperation({ summary: 'Get proverbs by category' })
  @ApiResponse({
    status: 200,
    description: 'Get proverbs by category',
    type: ProverbDto,
    isArray: true,
  })
  @Get('category/:category')
  async getProverbsByCategory(
    @Param('category') category: Category,
  ): Promise<ProverbDto[]> {
    const proverbs = await this.proverbService.getProverbsByCategory(category);

    return proverbs.map((proverb) => new ProverbDto(proverb));
  }
}
