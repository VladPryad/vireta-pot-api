import { Module } from '@nestjs/common';
import { PotModule } from 'src/pot/pot.module';
import { RecordModule } from 'src/record/record.module';
import { RpcController } from './rpc.controller';
import { RpcService } from './rpc.service';

@Module({
  imports: [PotModule, RecordModule],
  controllers: [RpcController],
  providers: [RpcService]
})
export class RpcModule {}
