import type { MenuProps } from "antd";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdArticle,
  MdShoppingBag,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group",
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

export const menuItems: MenuProps["items"] = [
  getItem(
    "Page",
    undefined,
    undefined,
    [
      getItem("Dashboard", "/dashboard", <MdDashboard />),
      getItem("Users", "/users", <MdSupervisedUserCircle />),
      getItem("Articles", "/articles", <MdArticle />),
      getItem("Products", "/products", <MdShoppingBag />),
    ],
    "group",
  ),
  getItem(
    "User",
    undefined,
    undefined,
    [
      getItem("Settings", "settings", <MdOutlineSettings />),
      getItem("Help", "help", <MdHelpCenter />),
      getItem("Logout", "logout", <MdLogout />),
    ],
    "group",
  ),
];
