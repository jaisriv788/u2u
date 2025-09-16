import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

const useUserStore = create(
  devtools(
    persist(
      (set) => ({
        user: null,
        setUser: (user) => set({ user }),
        isConnected: false,
        setIsConnected: (isConnected) => set({ isConnected }),
        token: null,
        setToken: (token) => set({ token }),
      }),
      {
        name: "user-storage",
        getStorage: () => sessionStorage,
      }
    ),
    { name: "UserStore" }
  )
);

export default useUserStore;
