import create from 'zustand';
import axios from 'axios';

export const useStoreIntoAPP = create<any>((set, get) => ({
  getUser: {
    login: false,
    isLoading: true,
  },

  requestAuthUser: async (): Promise<any> => {
    const session = await axios.get('/api/sign/session');
    set((state) => {
      state.getUser = {
        ...state.getUser,
        ...session.data,
        isLoading: false,
      };
    });
  },
}));

export const useGetUser = () => {
  return useStoreIntoAPP((state) => state.getUser);
};
