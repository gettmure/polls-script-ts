"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPosts = void 0;
const utils_1 = require("./shared/utils");
const constants_1 = require("./shared/constants");
const config_1 = __importDefault(require("./config"));
const options = {
    owner_id: config_1.default.Owner_ID,
    filter: 'suggests',
    extended: true,
    fields: ['profiles'],
};
const getPosts = async (api) => {
    const response = await api.wallGet(options);
    const timestamp = utils_1.getWeekTimestamp();
    const allPosts = response['items'];
    const validPosts = allPosts.filter((post) => {
        return post.date * constants_1.MILLISECONDS_PER_SECOND >= timestamp;
    });
    return validPosts;
};
exports.getPosts = getPosts;
//# sourceMappingURL=posts.js.map