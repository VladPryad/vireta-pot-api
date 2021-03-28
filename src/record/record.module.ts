import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Pot from 'src/pot/pot.entity';
import { RecordController } from './record.controller';
import Record from './record.entity';
import { RecordService } from './record.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pot]), TypeOrmModule.forFeature([Record])],
  controllers: [RecordController],
  providers: [RecordService],
  exports: [RecordService]
})

export class RecordModule {}
