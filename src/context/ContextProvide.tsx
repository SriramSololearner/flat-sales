import { ReactNode, createContext, useState } from "react";
import { data } from "../utils/data";
interface Istate {
  filteredData: {
    id: number;
    status: string;
    title: string;
    bedRooms: string;
    bathRooms: string;
    price: string;
    address: string;
    url: string;
    type: string;
  }[];
  data: {
    id: number;
    status: string;
    title: string;
    bedRooms: string;
    bathRooms: string;
    price: string;
    address: string;
    url: string;
    type: string;
  }[];
  toggle: boolean;
}

const detailsContext = createContext<
  | {
      flatsData: Istate["data"];
      filterByStatus: (type: string) => void;
      filtered: Istate["filteredData"];
      filteredByType: (Type: string, status: string) => void;
      toggle: boolean;
      toggleHandler: () => void;
    }
  | undefined
>(undefined);

const ContextData: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [flatsData] = useState<Istate["data"]>(data);
  const [filtered, setFiltered] = useState<Istate["filteredData"]>([]);
  const [toggle, setToggle] = useState<Istate["toggle"]>(false);
  const filterByStatus = (type: string) => {
    if (type === "Sold") {
      setFiltered(flatsData.filter((item) => item.status === type));
    } else if (type === "Active") {
      setFiltered(flatsData.filter((item) => item.status === type));
    } else if (type === "Draft") {
      setFiltered(flatsData.filter((item) => item.status === type));
    } else if (type === "AnyStatus") {
      setFiltered(flatsData);
    } else {
      setFiltered(flatsData);
    }
  };

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const filteredByType = (Type: string, Status: string) => {
    console.log(Type, Status);
    if (
      (Status === "Sold" || Status === "Active" || Status === "Draft") &&
      (Type === "home" || Type === "bussiness" || Type === "office")
    ) {
      setFiltered(
        flatsData.filter((item) => item.type === Type && item.status === Status)
      );
    } else {
      setFiltered(flatsData);
    }
  };

  return (
    <detailsContext.Provider
      value={{
        flatsData,
        filterByStatus,
        filtered,
        filteredByType,
        toggle,
        toggleHandler,
      }}
    >
      {children}
    </detailsContext.Provider>
  );
};

export { detailsContext, ContextData };
