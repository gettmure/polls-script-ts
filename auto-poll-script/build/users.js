"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
var config_1 = __importDefault(require("./config"));
var options = {
    access_token: config_1.default.Token,
    user_ids: [],
};
var getUsers = function (api, posts) {
    var users = [];
    posts.forEach(function (post) {
        options.user_ids.push(String(post.from_id));
    });
    api.usersGet(options).then(function (response) { });
};
exports.getUsers = getUsers;
//# sourceMappingURL=users.js.map