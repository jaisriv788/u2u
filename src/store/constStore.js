import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

const useConstStore = create(
  devtools(
    persist(
      (set) => ({
        baseUrl: "https://worldofSoftware.in/u2u_global/api/",
        screenLoading: true,
        setScreenLoading: (screenLoading) => set({ screenLoading }),
      }),
      {
        name: "const-storage",
        getStorage: () => localStorage,
      }
    ),
    { name: "ConstStore" }
  )
);

export default useConstStore;
