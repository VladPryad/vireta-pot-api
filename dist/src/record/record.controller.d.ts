import Record from './record.entity';
import { RecordService } from './record.service';
export declare class RecordController {
    private readonly recordService;
    constructor(recordService: RecordService);
    getRecordsByPot(potId: any): Promise<Record[]>;
}
