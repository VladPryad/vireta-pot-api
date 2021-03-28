import Record from 'src/record/record.entity';
import { Repository } from 'typeorm';
import CreatePotDTO from './dto/create-pot.dto';
import Pot from './pot.entity';
export declare class PotService {
    private potRepository;
    private recordRepository;
    constructor(potRepository: Repository<Pot>, recordRepository: Repository<Record>);
    create(dto: CreatePotDTO): Promise<Pot>;
}
