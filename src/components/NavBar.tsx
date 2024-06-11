import React, { useEffect, useState } from "react";
import { CustomKanban } from "./CustomKanban";

import {
  DEFAULT_CARDS_FINANCE,
  DEFAULT_CARDS_PRODUCT,
  DEFAULT_CARDS_SALES,
  DEFAULT_CARDS_SUPPORT,
} from "../contants/Constants";

import { VscLayoutSidebarLeftOff } from "react-icons/vsc";

import {
  FcDoughnutChart,
  FcMoneyTransfer,
  FcMultipleDevices,
  FcSalesPerformance,
  FcSupport,
} from "react-icons/fc";
import { GrFormNext } from "react-icons/gr";

type ColumnType = "backlog" | "todo" | "doing" | "done";

type CardType = {
  title: string;
  id: string;
  column: ColumnType;
  priority: string;
  points?: number;
};

const NavBar: React.FC = () => {
  const [nameDrawer, setNameDrawer] = useState(false);
  const [sideBar, setSideBar] = useState(true);
  const [cards, setCards] = useState<CardType[]>(DEFAULT_CARDS_PRODUCT);
  const [selectedTeam, setSelectedTeam] = useState<string>("product");

  const handleTeamSelection = (team: string, teamCards: CardType[]) => {
    setSelectedTeam(team);
    setCards(teamCards);
  };

  const getTeamClassName = (team: string) => {
    return selectedTeam === team ? "bg-gray-500" : "";
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full ${
          scrolled ? "backdrop-blur-3xl" : ""
        }`}
      >
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <div
                onClick={() => {
                  setSideBar(!sideBar);
                }}
                className="inline-flex items-center p-2  text-gray-500 w-max rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <VscLayoutSidebarLeftOff />
              </div>
            </div>
            <div className="flex items-center mr-96 bg-gray-700 text-white px-3 py-2 rounded-lg hover:bg-gray-600">
              <GrFormNext className="mr-2" />
              Kanban Board
            </div>

            <div className="flex items-center space-x-3">
              <div className="flex items-center ms-3">
                <div
                  className="flex  bg-gray-800 ml-96 mr-4 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown-user"
                  onClick={() => {
                    setNameDrawer(!nameDrawer);
                  }}
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="user photo"
                  />
                </div>

                {nameDrawer ? (
                  <div
                    className="absolute right-0 mt-32 w-48 bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                    id="dropdown-user"
                  >
                    <div className="px-4 py-3">
                      <p className="text-sm text-gray-900 dark:text-white">
                        Anush Shinde
                      </p>
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300">
                        ashinde.dev@gmail.com
                      </p>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {sideBar && (
        <aside
          id="logo-sidebar"
          className="fixed top-0 left-0 z-40 min-h-full overflow-scroll pt-20 transition-transform -translate-x-full border-r border-gray-800 sm:translate-x-0 bg-neutral-900 text-neutral-50"
          aria-label="Sidebar"
        >
          <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <FcDoughnutChart />
            <span className="ms-3">My projects</span>
          </a>

          <div className="h-full px-8 pb-4 overflow-y-auto">
            <ul className="space-y-2 ">
              <li
                onClick={() =>
                  handleTeamSelection("sales", DEFAULT_CARDS_SALES)
                }
              >
                <a
                  className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${getTeamClassName(
                    "sales"
                  )}`}
                >
                  <FcSalesPerformance />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Sales Team
                  </span>
                </a>
              </li>
              <li
                onClick={() =>
                  handleTeamSelection("product", DEFAULT_CARDS_PRODUCT)
                }
              >
                <a
                  className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${getTeamClassName(
                    "product"
                  )}`}
                >
                  <FcMultipleDevices />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Product Team
                  </span>
                </a>
              </li>
              <li
                onClick={() =>
                  handleTeamSelection("support", DEFAULT_CARDS_SUPPORT)
                }
              >
                <a
                  className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${getTeamClassName(
                    "support"
                  )}`}
                >
                  <FcSupport />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Support Team
                  </span>
                </a>
              </li>
              <li
                onClick={() =>
                  handleTeamSelection("finance", DEFAULT_CARDS_FINANCE)
                }
              >
                <a
                  className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${getTeamClassName(
                    "finance"
                  )}`}
                >
                  <FcMoneyTransfer />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Finance Team
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      )}
      <div className="p-8 pt-16 sm:ml-64">
        <CustomKanban cardsTeam={cards} />
      </div>
    </>
  );
};

export default NavBar;
