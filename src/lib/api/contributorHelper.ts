import { ContributionType } from '@/interfaces/contributions';
import axios from 'axios';
export const CreateContribution = async (contribution: ContributionType) => {
  const { data, status } = await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/contribution/create`,
    {
      ...contribution,
    }
  );
  if (status !== 201) return null;

  return data.data;
};
