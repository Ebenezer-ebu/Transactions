import React, { useContext } from "react";
import { myContext } from "./Context";
import { groupData, filtered, searchInput } from "../utils/helpers";
import List from "./List";

const Main = () => {
  let { data, filter, input } = useContext(myContext);
  if (filter) {
    data = filtered(filter, data);
  }
  if (input) {
    data = searchInput(input, data);
  }
  const formatdata = groupData(data);
  return (
    <div>
      <div>
        {formatdata.map((data, ind) => (
          <React.Fragment key={ind}>
            <div>{`${new Date(data.date.slice(0, -1))}`}</div>
            <List details={data.details} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Main;
