import { WallWallpostFull } from 'node-vk-sdk/distr/src/generated/Models';
import { getWeekTimestamp } from './shared/utils';
import { MILLISECONDS_PER_SECOND } from './shared/constants';
import { VKApi } from 'node-vk-sdk';
import config from './config';
import { WallGetParams } from 'node-vk-sdk/distr/src/generated/MethodsProps';

const options: WallGetParams = {
  owner_id: config.Owner_ID,
  filter: 'owner',
};

const getPosts = async (api: VKApi): Promise<Array<Post>> => {
  const response = await api.wallGet(options);
  const timestamp: number = getWeekTimestamp();
  const allPosts: Array<WallWallpostFull> = response['items'];
  let validPosts: Array<Post> = [];
  allPosts.forEach((post: WallWallpostFull) => {
    const postDate = post.date * MILLISECONDS_PER_SECOND;
    const isValid = postDate >= timestamp && post.hasOwnProperty('signer_id');
    if (isValid) {
      const url: string = post.attachments[0].photo.sizes.pop().url;
      // const data = fetch();
      const validPost: Post = {
        signer_id: post.signer_id,
        image_url: url,
      };
      validPosts.push(validPost);
    }
  });
  return validPosts;
};

export { getPosts };
