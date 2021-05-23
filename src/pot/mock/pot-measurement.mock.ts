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

    let rands = [0,between(0,100),between(0,100)];
    let shift = rands.sort(compare);
    console.log(shift)

    return {
        potId: id + '',
        potName: `Pot ` + id,
        measurements: {
            ph: [{
                timestamp: seed + shift[0] + '',
                value: Math.random() * 10 + ''
            }, {
                timestamp: seed + shift[1] + '',
                value: Math.random() * 10 + ''
            }, {
                timestamp: seed + shift[2] + '',
                value: Math.random() * 10 + ''
            }],
            humidity: [{
                timestamp: seed + shift[0] + '',
                value: Math.random() * 10 + ''
            }, {
                timestamp: seed + shift[1] + '',
                value: Math.random() * 10 + ''
            }, {
                timestamp: seed + shift[2] + '',
                value: Math.random() * 10 + ''
            }],
            mineralization: [{
                timestamp: seed + shift[0] + '',
                value: Math.random() * 10 + ''
            }, {
                timestamp: seed + shift[1] + '',
                value: Math.random() * 10 + ''
            }, {
                timestamp: seed + shift[2] + '',
                value: Math.random() * 10 + ''
            }]
        },
        total: 3
    }
}