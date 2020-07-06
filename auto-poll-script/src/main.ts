import { VKApi } from 'node-vk-sdk';
import config from './config';
import { WallWallpostFull } from 'node-vk-sdk/distr/src/generated/Models';
import { getUsers } from './users';
import { getPosts } from './posts';

const api: VKApi = new VKApi({
  token: config.Token,
});

const yasosuhui = async () => {
  const posts = await getPosts(api);
  console.log(posts);
};

yasosuhui();
