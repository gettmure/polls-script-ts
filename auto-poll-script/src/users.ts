import { VKApi } from 'node-vk-sdk';
import {
  WallWallpostFull,
  UsersUserXtrCounters,
} from 'node-vk-sdk/distr/src/generated/Models';
import config from './config';
import { UsersGetParams } from 'node-vk-sdk/distr/src/generated/MethodsProps';
import { UsersGetResponse } from 'node-vk-sdk/distr/src/generated/Responses';

const options: UsersGetParams = {
  access_token: config.Token,
  user_ids: [],
};

const getUsers = async (
  api: VKApi,
  posts: Array<Post>
): Promise<Array<User>> => {
  posts.forEach((post: Post) => {
    options.user_ids.push(String(post.signer_id));
  });
  const response: UsersGetResponse = await api.usersGet(options);
  const users: Array<User> = response.map((user: UsersUserXtrCounters) => {
    const name: string = `${user.first_name} ${user.last_name}`;
    const id = user.id;
    return { name, id } as User;
  });
  return users;
};

export { getUsers };
