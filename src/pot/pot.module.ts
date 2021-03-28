import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Record from 'src/record/record.entity';
import { PotController } from './pot.controller';
import Pot from './pot.entity';
import { PotService } from './pot.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pot]), TypeOrmModule.forFeature([Record])],
  controllers: [PotController],
  providers: [PotService],
  exports: [PotService]
})
export class PotModule {}
