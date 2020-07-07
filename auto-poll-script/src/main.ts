import { VKApi } from 'node-vk-sdk';
import config from './config';
import { getUsers } from './users';
import { getPosts } from './posts';
import postPoll from './poll';

const createPoll = async (api: VKApi) => {
  const posts = await getPosts(api);
  const users = await getUsers(api, posts);
  postPoll(api, posts, users);
};

const main = (): void => {
  const api: VKApi = new VKApi({
    token: config.Token,
  });
  createPoll(api);
};

main();
