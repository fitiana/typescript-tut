"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zip = zip;
function zip(a, b) {
    var result = [];
    var i;
    for (i = 0; i < Math.min(a.length, b.length); i += 1) {
        result.push(a[i]);
        result.push(b[i]);
    }
    for (var _i = 0, _a = [a, b]; _i < _a.length; _i++) {
        var remaining = _a[_i];
        for (; i < remaining.length; i += 1) {
            result.push(remaining[i]);
        }
    }
    return result;
}
