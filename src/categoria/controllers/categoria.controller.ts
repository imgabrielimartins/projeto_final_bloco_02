import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CategoriaService } from '../services/categoria.service';
import { Categoria } from '../entities/categoria.entity';

@Controller('/categorias')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Categoria[]> {
    return this.categoriaService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Categoria> {
    return this.categoriaService.findById(id);
  }

  @Get('/titulo/:titulo')
  @HttpCode(HttpStatus.OK)
  findByAllTitle(@Param('titulo') titulo: string): Promise<Categoria[]> {
    return this.categoriaService.findAllByTitle(titulo);
  }

  @Get('/setor/:setor')
  @HttpCode(HttpStatus.OK)
  findByAllSector(@Param('setor') setor: string): Promise<Categoria[]> {
    return this.categoriaService.FindAllBySector(setor);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() categoria: Categoria): Promise<Categoria> {
    return this.categoriaService.create(categoria);
  }
}
