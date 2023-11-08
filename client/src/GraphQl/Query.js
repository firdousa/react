import { gql } from "@apollo/client";

export let GET_PRODUCTS = gql`
  query {
    getProduct {
      id
      title
      price
      description
      category
      image
      rating {
        rate
        count
      }
    }
  }
`;
