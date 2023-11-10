import { Controller, Get, Post, Body, Patch, Param, Delete,HttpCode  } from '@nestjs/common';
import { CreateEmployeDto } from './employedto/create-employe.dto';
import { UpdateEmployeDto } from './employedto/update-employe';
import { EmployeService } from './employe.service';


@Controller('employe')
export class EmployeController {

  constructor(private readonly employeService: EmployeService) {}

  @Post('/Add')
  create(@Body() createEmployeDto: CreateEmployeDto) {
    return this.employeService.create(createEmployeDto);
  }

 

  @Get('/allemploye') 
  findAll() {
    return this.employeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeDto: UpdateEmployeDto) {
    return this.employeService.update(+id, updateEmployeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeService.remove(+id);
  }
  
}
