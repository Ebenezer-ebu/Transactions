import { useContext } from "react";
import { myContext } from "./Context";

const Filter = () => {
  const { filterList, handleClick } = useContext(myContext);
  return (
    <div className="filter-content">
      {filterList.map((filter, ind) => (
        <input key={ind} value={filter} type="button" onClick={handleClick} />
      ))}
    </div>
  );
};

export default Filter;
