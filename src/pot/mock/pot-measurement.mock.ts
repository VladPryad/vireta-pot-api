import PotRecord from "../dto/pot-record.dto";
import WebSocket from 'ws';
import { MSG } from "../constants/events";

function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min) + min
    )
}
function compare(a, b) {
    return a - b;
  }

export default function (socket: WebSocket, count: number, interval: number, id: string = "5fg54566v") {
    function delay(i: number) {
        setTimeout(() => {
            socket.send(
                JSON.stringify({
                    event: MSG,
                    payload: mockMeasurement(id, interval) //TODO: Inject real data
                }));
        }, interval * i);
    }

    for (let i=0; i < count; i++) {
        delay(i);
    }
}

const mockMeasurement = (id: string, interval: number): PotRecord => {
    const seed = Date.now();
    const kPh = 1;
    const kH = 5;
    const kM = 10;

    let rands = [0,between(interval/10, interval),between(interval/10, interval)];
    let shift = rands.sort(compare);

    return {
        potId: id + '',
        potName: `Pot ` + id,
        measurements: {
            ph: [{
                timestamp: seed + shift[0] + '',
                value: Math.random() * kPh + ''
            }, {
                timestamp: seed + shift[1] + '',
                value: Math.random() * kPh + ''
            }, {
                timestamp: seed + shift[2] + '',
                value: Math.random() * kPh + ''
            }],
            humidity: [{
                timestamp: seed + shift[0] + '',
                value: Math.random() * kH + ''
            }, {
                timestamp: seed + shift[1] + '',
                value: Math.random() * kH + ''
            }, {
                timestamp: seed + shift[2] + '',
                value: Math.random() * kH + ''
            }],
            mineralization: [{
                timestamp: seed + shift[0] + '',
                value: Math.random() * kM + ''
            }, {
                timestamp: seed + shift[1] + '',
                value: Math.random() * kM + ''
            }, {
                timestamp: seed + shift[2] + '',
                value: Math.random() * kM + ''
            }]
        },
        total: 3
    }
}