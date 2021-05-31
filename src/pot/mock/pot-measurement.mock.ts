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

export default function (socket: WebSocket, count: number, interval: number, id: string = "default") {
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

    const phMin = "0";
    const hMin = "0";
    const tMin = "0";
    const phMax = "14";
    const hMax = "100";
    const tMax = "1000";

    const phRange = {
        from: 4.8,
        to: 6.2
    }
    const hRange = {
        from: 60,
        to: 85
    }
    const tRange = {
        from: 270.15,
        to: 303.15
    }

    let rands = [0, between(interval/10, interval), between(interval/10, interval)];
    let shift = rands.sort(compare);

    return {
        potId: id + '',
        potName: `Pot ` + id,
        measurements: {
            ph: {
                min: phMin,
                max: phMax,
                values: [{
                    timestamp: seed + shift[0] + '',
                    value: between(phRange.from, phRange.to) + '' 
                }, {
                    timestamp: seed + shift[1] + '',
                    value: between(phRange.from, phRange.to) + ''
                }, {
                    timestamp: seed + shift[2] + '',
                    value: between(phRange.from, phRange.to) + ''
                }]
            },
            humidity: {
                min: hMin,
                max: hMax,
                values: [{
                    timestamp: seed + shift[0] + '',
                    value: between(hRange.from, hRange.to) + ''
                }, {
                    timestamp: seed + shift[1] + '',
                    value: between(hRange.from, hRange.to) + ''
                }, {
                    timestamp: seed + shift[2] + '',
                    value: between(hRange.from, hRange.to) + ''
                }]
            },
            temperature: {
                min: tMin,
                max: tMax,
                values: [{
                    timestamp: seed + shift[0] + '',
                    value: between(tRange.from, tRange.to) + '' 
                }, {
                    timestamp: seed + shift[1] + '',
                    value: between(tRange.from, tRange.to) + ''
                }, {
                    timestamp: seed + shift[2] + '',
                    value: between(tRange.from, tRange.to) + ''
                }]
            }
        },
        total: 3
    }
}