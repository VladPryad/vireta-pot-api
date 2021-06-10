import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import CreatePotDTO from './dto/create-pot.dto';
import { GetAllPotsByIdResponseDTO } from './dto/getallpotsbyid.dto';
import { GetRecordsByPotIdResponseDTO } from './dto/getrecordsbypotid.dto';
import Pot from './pot.entity';
import { PotService } from './pot.service';

@Controller('pot')
export class PotController {
    constructor(private readonly potService: PotService) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createPotDto: CreatePotDTO): Promise<Pot> {
        return this.potService.create(createPotDto);
    }

    @Get("user/:id")
    getAllPotsAccountId(@Param("id") id: string): Promise<GetAllPotsByIdResponseDTO> {
        return this.potService.getAllPotsByAccountId({ id });
    }

    @Get("records/:id/:periodHours")
    getRecordsByPotId(@Param() params): Promise<GetRecordsByPotIdResponseDTO> {
        return this.potService.getRecordsByPotId({
                id: params.id,
                periodHours: params.periodHours 
            })
    }
    
}
