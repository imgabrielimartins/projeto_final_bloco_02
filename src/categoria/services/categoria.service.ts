import { Categoria } from './../entities/categoria.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) {}

  async findAll(): Promise<Categoria[]> {
    return await this.categoriaRepository.find();
  }

  async findById(id: number): Promise<Categoria> {
    const categoria = await this.categoriaRepository.findOne({
      where: {
        id,
      },
    });

    if (!categoria)
      throw new HttpException('Categoria não encontrada', HttpStatus.NOT_FOUND);

    return categoria;
  }

  async findAllByTitle(titulo: string): Promise<Categoria[]> {
    return await this.categoriaRepository.find({
      where: {
        titulo: ILike(`%${titulo}%`),
      },
    });
  }
}
