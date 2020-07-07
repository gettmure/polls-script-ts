import { VKApi } from 'node-vk-sdk';
import {
  PollsCreateParams,
  WallPostParams,
} from 'node-vk-sdk/distr/src/generated/MethodsProps';
import config from './config';

const pollOptions: PollsCreateParams = {
  access_token: config.Poll_Token,
  question: 'ГЕРОЙ НЕДЕЛИ!',
  add_answers: '',
  owner_id: config.Owner_ID,
  photo_id: 457239020,
};

const postOptions: WallPostParams = {
  owner_id: config.Owner_ID,
  from_group: true,
  message: 'ПОГНАЛИ!',
};

const getPollData = (
  posts: Array<Post>,
  users: Array<User>
): Array<PollItem> => {
  let result: Array<PollItem> = [];
  posts.forEach((post: Post) => {
    const user: User = users.find((user: User) => post.signer_id == user.id);
    const pollItem: PollItem = {
      name: user.name,
      photoId: post.photoId,
    };
    result.push(pollItem);
  });
  return result;
};

const postPoll = async (api: VKApi, posts: Array<Post>, users: Array<User>) => {
  let pollItems: Array<PollItem> = getPollData(posts, users);
  pollOptions.add_answers = JSON.stringify(
    pollItems.map(
      (item: PollItem, index: number) => `${index + 1} (${item.name})`
    )
  );
  const pollObject = await api.pollsCreate(pollOptions);
  await api.pollsEdit({
    owner_id: config.Owner_ID,
    poll_id: pollObject.id,
    background_id: '1',
  });
  postOptions.attachments = [`poll${config.Owner_ID}_${pollObject.id}`];
  pollItems.forEach((item: PollItem) => {
    const photo: string = `photo${config.Owner_ID}_${item.photoId}`;
    postOptions.attachments.push(photo);
  });
  const postResponse = await api.wallPost(postOptions);
};

export default postPoll;
