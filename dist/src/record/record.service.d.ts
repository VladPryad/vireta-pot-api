import Record from 'src/record/record.entity';
import { Repository } from 'typeorm';
export declare class RecordService {
    private recordRepository;
    constructor(recordRepository: Repository<Record>);
    getRecordsByPot(potId: any): Promise<Record[]>;
}
