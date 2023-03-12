import { useUserStore } from 'src/store/userStore';

const useUser = () => {
  const { user, setUser } = useUserStore();
  return { user };
};

export default useUser;
