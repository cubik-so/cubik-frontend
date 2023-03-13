import axios from 'axios';

interface CommentType {
  id?: string;
  message: string;
  userId: string;
  projectsId: string;
}

export const CreateComment = async (comment: CommentType) => {
  const { data, status } = await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/comment/create`,
    {
      ...comment,
    }
  );
  if (status !== 201) {
    return null;
  }

  return data.data;
};
