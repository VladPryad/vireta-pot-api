import CreatePotDTO from 'src/pot/dto/create-pot.dto';
import { GetAllPotsByIdRequestDTO, GetAllPotsByIdResponseDTO } from 'src/pot/dto/getallpotsbyid.dto';
import Pot from 'src/pot/pot.entity';
import { PotService } from 'src/pot/pot.service';
import { RecordService } from 'src/record/record.service';
interface CreatePotResponse {
    pot: Pot;
}
export declare class RpcController {
    private readonly potService;
    private readonly recordService;
    constructor(potService: PotService, recordService: RecordService);
    createPot(dto: CreatePotDTO): Promise<CreatePotResponse>;
    getAllPotsByAccountId(dto: GetAllPotsByIdRequestDTO): Promise<GetAllPotsByIdResponseDTO>;
}
export {};
