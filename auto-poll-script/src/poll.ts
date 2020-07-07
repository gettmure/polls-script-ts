import { VKApi } from 'node-vk-sdk';
import { PollsCreateParams } from 'node-vk-sdk/distr/src/generated/MethodsProps';
import config from './config';

const options: PollsCreateParams = {
  access_token: '',
  question: 'маму ебал',
  add_answers: 'idi, na, huy',
  owner_id: config.Owner_ID,
};

const postPoll = async (
  api: VKApi,
  posts: Array<Post>,
  users: Array<string>
) => {
  // const response = api.pollsCreate(options);
  const url: string =
    'https://oauth.vk.com/authorize?client_id=7531869&display=popup&redirect_uri=http://example.com/callback&scope=wall&response_type=token&v=5.120&state=aue';
  const response = await fetch(url);
  console.log(response);
};

export default postPoll;
