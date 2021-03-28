import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from 'ormconfig';
import { PotModule } from './pot/pot.module'
import { RpcModule } from './rpc/rpc.module';
import { RecordController } from './record/record.controller';
import { RecordModule } from './record/record.module';

@Module({
  imports: [PotModule, TypeOrmModule.forRoot(ormconfig), RpcModule, RecordModule],
  controllers: [RecordController]
})
export class AppModule {}
