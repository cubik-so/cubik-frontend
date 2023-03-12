import { contributions } from './contributions';
import { userType } from './user';

export type projectType = {
  name: string;
  logo: string;
  about: string;
  tags: string[];
  url: string;
  total_funding_raised: number;
  detailed_description: string;
  owner?: userType;
  contributors?: contributions[];
  socials?: [{ name: string; url: string }];
  project_owners?: [
    {
      name: string;
      image: string;
      pubkey: string;
    }
  ];
};
