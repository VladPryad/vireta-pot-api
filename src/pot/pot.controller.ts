import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import CreatePotDTO from './dto/create-pot.dto';
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
}
