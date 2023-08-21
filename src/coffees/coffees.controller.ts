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

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return `this action returns all coffees Limit:${limit} and Query:${offset}`;
  }
  //   first
  //   findAll(@Res() response) {
  //     response.status(200).send('this action find all');
  //   }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `this action return${id}`;
  }

  @Post()
  @HttpCode(HttpStatus.GONE) //http status menjadi 410 gone
  create(@Body() Body) {
    return Body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() Body) {
    return `this action updates #${id} coffee`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `this action removes #${id} coffee`;
  }
}
