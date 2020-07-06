import { VKApi } from 'node-vk-sdk';
import { WallWallpostFull } from 'node-vk-sdk/distr/src/generated/Models';
import { UsersGetResponse } from 'node-vk-sdk/distr/src/generated/Responses';
import config from './config';

const options = {
  access_token: config.Token,
  user_ids: [],
};

const getUsers = async (api: VKApi, posts: Array<WallWallpostFull>) => {
  posts.forEach((post) => {
    options.user_ids.push(String(post.from_id));
  });
  const response = await api.usersGet(options);
  console.log(response);
};

export { getUsers };
