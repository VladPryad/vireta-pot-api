import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import CreatePotDTO from 'src/pot/dto/create-pot.dto';
import { GetAllPotsByIdRequestDTO, GetAllPotsByIdResponseDTO } from 'src/pot/dto/getallpotsbyid.dto';
import Pot from 'src/pot/pot.entity';
import { PotService } from 'src/pot/pot.service';
import { RecordService } from 'src/record/record.service';

interface CreatePotResponse {
    pot: Pot;
}

@Controller('rpc')
export class RpcController {
    constructor(private readonly potService: PotService, private readonly recordService: RecordService) {}

    @GrpcMethod("RPC", "CreatePot")
    async createPot(dto: CreatePotDTO): Promise<CreatePotResponse> {
        const pot = await this.potService.create(dto);
        return { pot: pot };
    }

    @GrpcMethod("RPC", "getAllPotsByAccountId")
    async getAllPotsByAccountId(dto: GetAllPotsByIdRequestDTO): Promise<GetAllPotsByIdResponseDTO> {
        const pots = await this.potService.getAllPotsByAccountId(dto);
        return pots;
    }
}
