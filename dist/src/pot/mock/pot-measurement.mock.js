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
                payload: mockMeasurement(id)
            }));
        }, interval * i);
    }
    for (let i = 0; i < count; i++) {
        delay(i);
    }
}
exports.default = default_1;
const mockMeasurement = (id) => {
    const seed = Date.now();
    let rands = [0, between(0, 100), between(0, 100)];
    let shift = rands.sort(compare);
    console.log(shift);
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
    };
};
//# sourceMappingURL=pot-measurement.mock.js.map