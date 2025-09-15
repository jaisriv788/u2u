import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

const useUserStore = create(
  devtools(
    persist(
      (set) => ({
        user: null,
        setUser: (user) => set({ user }),
        isConnected: false,
        setIsConnected: (isConnected) => set({isConnected}),
      }),
      {
        name: "user-storage",
        getStorage: () => localStorage,
      }
    ),
    { name: "UserStore" }
  )
);

export default useUserStore;
