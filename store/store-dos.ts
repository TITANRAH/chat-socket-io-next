import { create } from 'zustand';
import { User } from '../interfaces';

interface State {
  currentUserData: User; // Puedes reemplazar 'any' con el tipo adecuado para currentUserData
  currentUserId: string;
  setCurrentUser: (payload: any) => void;
  setCurrentUserId: (payload: string) => void;
}

const useUserStore = create<State>(
    (set) => ({
    
  currentUserData: {
      _id: '',
      clerkUserId: '',
      name: '',
      userName: '',
      email: '',
      profilePicture: '',
      createdAt: '',
      updatedAt: '',
      __v: 0
  },
  currentUserId: "",
  setCurrentUser: (payload) => {
    set((state) => ({ ...state, currentUserData: payload }))
    
} ,
  setCurrentUserId: (payload) => set((state) => ({ ...state, currentUserId: payload })),
}));


export default useUserStore;