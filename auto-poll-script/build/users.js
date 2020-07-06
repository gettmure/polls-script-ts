"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const config_1 = __importDefault(require("./config"));
const options = {
    access_token: config_1.default.Token,
    user_ids: [],
};
const getUsers = (api, posts) => {
    let users = [];
    posts.forEach((post) => {
        options.user_ids.push(String(post.from_id));
    });
    api.usersGet(options).then((response) => { });
};
exports.getUsers = getUsers;
//# sourceMappingURL=users.js.map