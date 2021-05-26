"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("../constants/events");
function between(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function compare(a, b) {
    return a - b;
}
function default_1(socket, count, interval, id = "5fg54566v") {
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
    const kPh = 1;
    const kH = 5;
    const kM = 10;
    let rands = [0, between(interval / 10, interval), between(interval / 10, interval)];
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
    };
};
//# sourceMappingURL=pot-measurement.mock.js.map