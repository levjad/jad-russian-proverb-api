import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from '../enum/category.enum';
import { Type } from 'class-transformer';

@Entity()
export class Proverb {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  russian_proverb: string;

  @Column({ nullable: false })
  english_translation: string;

  @Column({ nullable: false })
  meaning_explanation: string;

  @Column({ nullable: false })
  @Type(() => String)
  category: Category;
}
