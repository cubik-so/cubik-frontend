import { contributions } from './contributions';
import { projectType } from './project';

export type userType = {
  id: string;
  bio: string;
  picture: String;
  pub_key: String;
  name: String;
  userName: String;
  verified: Boolean;
  projects?: projectType[];
  contributions?: contributions[];
};
