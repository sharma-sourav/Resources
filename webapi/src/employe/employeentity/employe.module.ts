import { Module } from '@nestjs/common';
import { EmployeService } from '../employe.service';
import { EmployeController } from '../employe.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employe } from './employe.entity';

@Module({
imports:[TypeOrmModule.forFeature([Employe])],
  controllers: [EmployeController],
  providers: [EmployeService],
})
export class EmployeModule {}
