import Pot from "../pot.entity";

export class GetAllPotsByIdRequestDTO {
    readonly id: string;
}

export class GetAllPotsByIdResponseDTO {
    pots: Pot[];
}