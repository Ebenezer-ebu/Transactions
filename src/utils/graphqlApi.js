import { gql } from "@apollo/client";

export const TRANSACTIONS = gql`
  query {
    transactions {
      id
      status
      name
      date
      type
    }
  }
`;