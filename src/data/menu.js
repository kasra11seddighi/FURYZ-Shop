// src/features/Topbar/data/menu.js
import {
  HiOutlineHome,
  HiOutlineShoppingBag,
  HiOutlineTag,
  HiOutlineNewspaper,
} from "react-icons/hi2";
import { FiGrid, FiTrendingDown } from "react-icons/fi";

const menu = [
  {
    id: "main",
    title: "Main Menu",
    items: [
      { id: "home", title: "Home", href: "/", icon: HiOutlineHome },

      { id: "new", title: "New Arrivals", href: "/new", icon: HiOutlineShoppingBag },
      { id: "sale", title: "Deals", href: "/sale", icon: FiTrendingDown, highlight: true },
      { id: "brands", title: "Brands", href: "/brands", icon: HiOutlineTag },
      { id: "blog", title: "Blog", href: "/blog", icon: HiOutlineNewspaper },
    ],
  },
];

export default menu;
