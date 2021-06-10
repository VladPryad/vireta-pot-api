import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Record from 'src/record/record.entity';
import { Repository } from 'typeorm';


@Injectable()
export class RecordService {
    constructor(
    @InjectRepository(Record)
    private recordRepository: Repository<Record>) {}

    getRecordsByPot(potId) {
        return this.recordRepository.find({
            where: {
                potId
            }
        })
    }
}

