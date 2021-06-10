import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import Record from './record.entity';
import { RecordService } from './record.service';

@Controller('record')
export class RecordController {
    constructor(private readonly recordService: RecordService) {}

    @Get(':potId')
    async getRecordsByPot(@Param("potId") potId) {
        return await this.recordService.getRecordsByPot(potId);
    }
}
