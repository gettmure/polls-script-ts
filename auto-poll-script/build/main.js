"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_vk_sdk_1 = require("node-vk-sdk");
const config_1 = __importDefault(require("./config"));
const posts_1 = require("./posts");
const api = new node_vk_sdk_1.VKApi({
    token: config_1.default.Token,
});
const main = async () => {
    const posts = await posts_1.getPosts(api);
    console.log(posts);
};
main();
//# sourceMappingURL=main.js.map