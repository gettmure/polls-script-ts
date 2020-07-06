"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeekTimestamp = void 0;
const getWeekTimestamp = () => {
    const todayDate = new Date();
    todayDate.setDate(todayDate.getDate() - 7);
    return todayDate.getTime();
};
exports.getWeekTimestamp = getWeekTimestamp;
//# sourceMappingURL=utils.js.map