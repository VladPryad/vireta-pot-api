import Record from '../../record/record.entity';
export declare class GetRecordsByPotIdRequestDTO {
    readonly id: string;
    periodHours: number;
}
export declare class GetRecordsByPotIdResponseDTO {
    records: Record[];
}
