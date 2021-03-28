import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Record from 'src/record/record.entity';
import { Repository } from 'typeorm';
import CreatePotDTO from './dto/create-pot.dto';
import Pot from './pot.entity';

@Injectable()
export class PotService {
    constructor(
        @InjectRepository(Pot)
        private potRepository: Repository<Pot>,
        @InjectRepository(Record)
        private recordRepository: Repository<Record>
      ) {}

    create(dto: CreatePotDTO): Promise<Pot> {
       const pot = new Pot();
       pot.accountId = dto.accountId;
       pot.name = dto.name || "";
       return this.potRepository.save(pot);;
    }
}