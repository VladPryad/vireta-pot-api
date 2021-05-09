"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("../constants/events");
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
    };
};
//# sourceMappingURL=pot-measurement.mock.js.map