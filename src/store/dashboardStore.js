import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

const useDashboardStore = create(
  devtools(
    persist(
      (set) => ({
        dashboardData: null,
        setDashBoardData: (dashboardData) => set({ dashboardData }),
      }),
      {
        name: "dashboard-storage",
        getStorage: () => sessionStorage,
      }
    ),
    { name: "DashboardStore" }
  )
);

export default useDashboardStore;
