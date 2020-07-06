import { WallWallpostFull } from 'node-vk-sdk/distr/src/generated/Models';
import { getWeekTimestamp } from './shared/utils';
import { MILLISECONDS_PER_SECOND } from './shared/constants';
import { VKApi } from 'node-vk-sdk';
import config from './config';

const options = {
  owner_id: config.Owner_ID,
  filter: 'suggests',
  extended: true,
  fields: ['profiles'],
};

const getPosts = async (api: VKApi): Promise<Array<WallWallpostFull>> => {
  const response = await api.wallGet(options);
  const timestamp: number = getWeekTimestamp();
  const allPosts: Array<WallWallpostFull> = response['items'];
  const validPosts: Array<WallWallpostFull> = allPosts.filter((post) => {
    return post.date * MILLISECONDS_PER_SECOND >= timestamp;
  });
  return validPosts;
};

export { getPosts };
