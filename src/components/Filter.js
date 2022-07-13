import { useContext } from "react";
import { myContext } from "./Context";

const Filter = () => {
  const { filterList, handleClick, filter } = useContext(myContext);
  console.log(filter);
  return (
    <div className="filter-content">
      {filterList.map((filtered, ind) => (
        <input
          key={ind}
          value={filtered}
          type="button"
          id={filter === filtered ? "active" : ""}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

export default Filter;
