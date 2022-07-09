import { useContext } from "react";
import { myContext } from "./Context";

const Search = () => {
  const { input, handleChange } = useContext(myContext);
  return (
    <div className="search-content">
      <input
        type="text"
        value={input}
        placeholder="Search..."
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
