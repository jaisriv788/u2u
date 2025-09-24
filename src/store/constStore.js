import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

const useConstStore = create(
  devtools(
    persist(
      (set) => ({
        baseUrl: "https://worldofSoftware.in/u2u_global/api/",
        usdtAddress: "0x55d398326f99059fF775485246999027B3197955",
        contractAddress: "0xb92cbb7830B2cd93aa72572Eb36591d6D770981b",
        walletAddress: null,
        setWalletAddress: (walletAddress) => set({ walletAddress }),
        screenLoading: false,
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
