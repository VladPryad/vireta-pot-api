import PotRecord from "../dto/pot-record.dto";
import WebSocket from 'ws';
import { MSG } from "../constants/events";

export default function (socket: WebSocket, count: number, interval: number, id: string = "5fg54566v") {
    function delay(i: number) {
        setTimeout(() => {
            socket.send(
                JSON.stringify({
                    event: MSG,
                    payload: mockMeasurement(id) //TODO: Inject real data
                }));
        }, interval * i);
    }

    for (let i=0; i < count; i++) {
        delay(i);
    }
}

const mockMeasurement = (id: string): PotRecord => {
    const seed = Date.now();

    return {
        potId: id + '',
        potName: `Pot ` + id,
        measurements: {
            ph: [{
                timestamp: seed + '',
                value: Math.random() * 10 + ''
            }, {
                timestamp: seed + 10 + '',
                value: Math.random() * 10 + ''
            }, {
                timestamp: seed + 20 + '',
                value: Math.random() * 10 + ''
            }],
            humidity: [{
                timestamp: seed + '',
                value: Math.random() * 10 + ''
            }, {
                timestamp: seed + 10 + '',
                value: Math.random() * 10 + ''
            }, {
                timestamp: seed + 20 + '',
                value: Math.random() * 10 + ''
            }],
            mineralization: [{
                timestamp: seed + '',
                value: Math.random() * 10 + ''
            }, {
                timestamp: seed + 10 + '',
                value: Math.random() * 10 + ''
            }, {
                timestamp: seed + 20 + '',
                value: Math.random() * 10 + ''
            }]
        },
        total: 3
    }
}