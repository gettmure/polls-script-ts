import { VKApi } from 'node-vk-sdk';
import { WallWallpostFull } from 'node-vk-sdk/distr/src/generated/Models';
import config from './config';
import { UsersGetResponse } from 'node-vk-sdk/distr/src/generated/Responses';

const options = {
  access_token: config.Token,
  user_ids: [],
};

const getUsers = (api: VKApi, posts: Array<WallWallpostFull>): void => {
  let users: Array<string> = [];
  posts.forEach((post) => {
    options.user_ids.push(String(post.from_id));
  });
  api.usersGet(options).then((response: UsersGetResponse) => {});
};

export { getUsers };
