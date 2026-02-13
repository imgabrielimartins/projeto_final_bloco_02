import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CategoriaService } from '../services/categoria.service';
import { Categoria } from '../entities/categoria.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Categoria')
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

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() categoria: Categoria): Promise<Categoria> {
    return this.categoriaService.update(categoria);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.categoriaService.delete(id);
  }

  @Get('/busca-global/:termo')
  findAllByGlobal(@Param('termo') termo: string): Promise<Categoria[]> {
    return this.categoriaService.findAllByGlobal(termo);
  }
}
