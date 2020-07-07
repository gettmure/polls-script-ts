import * as dotenv from 'dotenv';
dotenv.config();

type Config = {
  Token: string;
  Poll_Token: string;
  Owner_ID: number;
};

const config: Config = {
  Token: process.env.TOKEN,
  Poll_Token: process.env.TOKEN_POLL,
  Owner_ID: Number(process.env.OWNER_ID),
};

export default config;
