"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("../constants/events");
function between(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function compare(a, b) {
    return a - b;
}
function default_1(socket, count, interval, id = "default") {
    function delay(i) {
        setTimeout(() => {
            socket.send(JSON.stringify({
                event: events_1.MSG,
                payload: mockMeasurement(id, interval)
            }));
        }, interval * i);
    }
    for (let i = 0; i < count; i++) {
        delay(i);
    }
}
exports.default = default_1;
const mockMeasurement = (id, interval) => {
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
    };
    const hRange = {
        from: 60,
        to: 85
    };
    const tRange = {
        from: 270.15,
        to: 303.15
    };
    let rands = [0, between(interval / 10, interval), between(interval / 10, interval)];
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
    };
};
//# sourceMappingURL=pot-measurement.mock.js.map