import { CiDiscount1 } from "react-icons/ci";
import { IoIosHelpBuoy } from "react-icons/io";
import { MdOutlineAssignmentInd } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
const link = [
    {
      icon: <CiSearch />,
      name: "Search",
      path: "/search"
    },
    {
      icon: <CiDiscount1 />,
      name: "Offers",
      sup: "New",
      path: "/offers"
    },
    {
      icon: <IoIosHelpBuoy />,
      name: "Help",
      path: "/help"
    },
    {
      icon: <MdOutlineAssignmentInd />,
      name: "Sign In",
    },
    {
      icon: <FaShoppingCart />,
      name: "Cart",
      path: "/cart"
    },
  ];

export default link;