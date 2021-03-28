import CreatePotDTO from './dto/create-pot.dto';
import { GetAllPotsByIdResponseDTO } from './dto/getallpotsbyid.dto';
import Pot from './pot.entity';
import { PotService } from './pot.service';
export declare class PotController {
    private readonly potService;
    constructor(potService: PotService);
    create(createPotDto: CreatePotDTO): Promise<Pot>;
    getAllPotsAccountId(id: string): Promise<GetAllPotsByIdResponseDTO>;
}
