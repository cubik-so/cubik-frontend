import { IUser } from 'src/store/userStore';

export type projectType = {
  id: string;
  industry: any;
  logo: string;
  long_description: string;
  owner: IUser;
  owner_publickey: string;
  project_name: string;
  short_description: string;
  socials: any;
  project_link: string;
  total: number;
  usd_total?: number;
};
