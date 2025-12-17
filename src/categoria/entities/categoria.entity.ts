import { IsNotEmpty } from 'class-validator';
import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'tb_categorias' })
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  titulo: string;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  descricao: string;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  setor: string;

  @UpdateDateColumn()
  dataChegada: Date;
}
