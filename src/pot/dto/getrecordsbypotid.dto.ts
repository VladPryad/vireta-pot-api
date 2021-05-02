import Record from '../../record/record.entity';

export class GetRecordsByPotIdRequestDTO {
    readonly id: string;
    periodHours: number;
}

export class GetRecordsByPotIdResponseDTO {
    records: Record[];
}