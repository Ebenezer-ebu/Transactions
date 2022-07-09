import React from "react";
import { FcMoneyTransfer } from "react-icons/fc";
import { FaMoneyBillAlt } from "react-icons/fa";
import { GoCreditCard } from "react-icons/go";
import { MdOutlinePayments } from "react-icons/md";

const List = (props) => {
  const { details } = props;
  return (
    <div>
      {details.map((detail) => (
        <div className="list" key={detail.id}>
          <div className="icon">
            {detail.type.toLowerCase() === "transfer" ? (
              <FcMoneyTransfer />
            ) : detail.type.toLowerCase() === "bills" ? (
              <FaMoneyBillAlt />
            ) : detail.type.toLowerCase() === "credit" ? (
              <GoCreditCard />
            ) : (
              <MdOutlinePayments />
            )}
          </div>
          <div className="details">
            <ul>
              <li>{detail.name}</li>
              <li>{detail.status}</li>
              <li>{detail.type}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
