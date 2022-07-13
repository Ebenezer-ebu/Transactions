import { createContext, useState } from "react";
import { useQuery } from "@apollo/client";
import { TRANSACTIONS } from "../utils/graphqlApi";

export const myContext = createContext(null);

const MainContext = (props) => {
  const [input, setInput] = useState("");
  const [filterList, setFilterList] = useState([
    "transfer",
    "bills",
    "credit",
    "debit",
  ]);
  const [filter, setFilter] = useState("");
  const { loading, error, data } = useQuery(TRANSACTIONS);

  const handleClick = (e) => {
    setFilter(e.target.value);
    if (input) {
      setInput("");
    }
  };
  const handleChange = (e) => {
    setInput(e.target.value);
    if (filter) {
      setFilter("");
    }
  };

  if (data) {
    return (
      <myContext.Provider
        value={{
          data: data.transactions,
          handleChange,
          input,
          filterList,
          handleClick,
          filter,
        }}
      >
        {props.children}
      </myContext.Provider>
    );
  }
};

export default MainContext;
