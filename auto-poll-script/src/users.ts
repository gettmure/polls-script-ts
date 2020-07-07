import { VKApi } from 'node-vk-sdk';
import {
  WallWallpostFull,
  UsersUserXtrCounters,
} from 'node-vk-sdk/distr/src/generated/Models';
import config from './config';
import { UsersGetParams } from 'node-vk-sdk/distr/src/generated/MethodsProps';

const options: UsersGetParams = {
  access_token: config.Token,
  user_ids: [],
};

const getUsers = async (
  api: VKApi,
  posts: Array<Post>
): Promise<Array<string>> => {
  posts.forEach((post: Post) => {
    options.user_ids.push(String(post.signer_id));
  });
  const response = await api.usersGet(options);
  const users = response.map((user: UsersUserXtrCounters) => {
    return `${user.first_name} ${user.last_name}`;
  });
  return users;
};

export { getUsers };
