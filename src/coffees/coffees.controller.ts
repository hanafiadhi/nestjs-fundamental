import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { response } from 'express';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}
  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    // return `this action returns all coffees Limit:${limit} and Query:${offset}`;
    return this.coffeesService.findAll();
  }
  //   first
  //   findAll(@Res() response) {
  //     response.status(200).send('this action find all');
  //   }z

  @Get(':id')
  findOne(@Param('id') id: string) {
    // return `this action return${id}`;
    return this.coffeesService.findOne(id);
  }

  @Post()
  //   @HttpCode(HttpStatus.GONE) //http status menjadi 410 gone
  create(@Body() body) {
    return this.coffeesService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    // return `this action updates #${id} coffee`;
    return this.coffeesService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // return `this action removes #${id} coffee`;
    return this.coffeesService.remove(id);
  }
}
