import { TbCategory } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { BsFillDatabaseFill } from "react-icons/bs";
import { SiSimpleanalytics } from "react-icons/si";
import {
  AiOutlineOrderedList,
  AiFillGift,
  AiTwotoneSetting,
} from "react-icons/ai";
import { ISidebarItem } from "./components/Sidebar/sidebar.interface";

function useLinks() {
  const icons = {
    home: TbCategory,
    customers: FaUserCircle,
    products: BsFillDatabaseFill,
    orders: MdOutlineProductionQuantityLimits,
    analytics: SiSimpleanalytics,
    categories: AiOutlineOrderedList,
    discount: AiFillGift,
    settings: AiTwotoneSetting,
  };
  const routes: ISidebarItem[] = [
    {
      id: 0,
      title: "dashboard",
      href: "/",
      icon: icons.home,
    },
    {
      id: 1,
      title: "Customers",
      href: "/customers",
      icon: icons.customers,
    },
    {
      id: 2,
      title: "Products",
      href: "/products",
      icon: icons.products,
    },
    {
      id: 3,
      title: "Orders",
      href: "/orders",
      icon: icons.orders,
    },
    {
      id: 4,
      title: "Analytics",
      href: "/analytics",
      icon: icons.analytics,
    },
    {
      id: 5,
      title: "categories",
      href: "/categories",
      icon: icons.categories,
    },
    {
      id: 6,
      title: "discount",
      href: "/discount",
      icon: icons.discount,
    },
    {
      id: 7,
      title: "settings",
      href: "/settings",
      icon: icons.settings,
    },
  ];

  return routes;
}

export default useLinks;
