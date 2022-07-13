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
  console.log(formatdata);
  return (
    <div>
      <div>
        {formatdata.length > 0 ? (
          formatdata.map((data, ind) => (
            <div key={ind} className="sect">
              <div className="date">{`${new Date(
                data.date.slice(0, -1)
              )}`}</div>
              <List details={data.details} />
            </div>
          ))
        ) : (
          <div className="no-data">No data to deplay from your search...</div>
        )}
      </div>
    </div>
  );
};

export default Main;
