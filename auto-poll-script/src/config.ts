import * as dotenv from 'dotenv';
dotenv.config();

type Config = {
  Token: string;
  Owner_ID: number;
};

const config: Config = {
  Token: process.env.TOKEN,
  Owner_ID: Number(process.env.OWNER_ID),
};

export default config;
