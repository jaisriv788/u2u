import { useEffect, useState } from "react";
import { sidebarLinkData } from "../../data/sidebar";
import { useNavigate, useLocation } from "react-router";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";
import useUserStore from "../../store/userStore";
import useModalStore from "../../store/modalStore";

function SideBar() {
  const [activeItemId, setActiveItemId] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    sidebarLinkData.forEach((data) => {
      // Check main path
      if (data.path && data.path === location.pathname) {
        setActiveItemId(data.id);
      }
      // Check subRoutes if present
      if (data.subRoute) {
        data.subRoute.forEach((sub) => {
          if (sub.path && sub.path === location.pathname) {
            setActiveItemId(data.id);
          }
        });
      }
    });
  }, [location.pathname]);

  const { setIsSidebarOpen } = useModalStore();
  const { setUser, setIsConnected } = useUserStore();

  const handleNavigate = (path) => {
    navigate(path);
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="w-65 absolute lg:relative inset-0 bg-black pt-3">
      {sidebarLinkData.map((data) => {
        const Icon = data.icon;
        const isOpen = activeItemId === data.id;
        const onMainClick = () => {
          if (data.path) {
            handleNavigate(data.path);
            setActiveItemId(data.id);
          }
          if (data.subRoute) {
            setActiveItemId((prev) => (prev === data.id ? null : data.id));
          }
          if (data.signout) {
            setUser(null);
            setIsConnected(false);
          }
        };

        return (
          <div>
            <div
              key={data.id}
              onClick={onMainClick}
              className={`flex items-center gap-2 px-5 py-3 cursor-pointer ${
                data.id == activeItemId && "border-l-4"
              } border-green-500 rounded`}
            >
              <Icon />
              <div className="text-sm">{data.title}</div>
              {data.subRoute && (
                <div className="ml-auto text-[12px]">
                  {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              )}
            </div>
            <AnimatePresence initial={false}>
              {isOpen && data.subRoute && (
                <motion.div
                  key="submenu"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="ml-6 mt-2 flex flex-col gap-3"
                >
                  {data.subRoute.map((sub) => {
                    const SubIcon = sub.icon;
                    return (
                      <div
                        key={sub.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (sub.path) handleNavigate(sub.path);
                          if (sub.link) window.open(sub.link, "_blank");
                        }}
                        className="flex items-center gap-2 text-[13px] hover:text-[#E69019] cursor-pointer"
                      >
                        <SubIcon size={8} />
                        <span>{sub.title}</span>
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default SideBar;
