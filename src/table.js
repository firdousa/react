import { useEffect, useState } from "react";
import { GET_PRODUCTS } from "./GraphQl/Query";
import { useQuery } from "@apollo/client";
const Table = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  //   if (data) console.log(data);
  //   if (error) console.log(error);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (data !== undefined) {
      setProducts([...data.getProduct]);
    }
  }, [data]);

  return (
    <>
      <p className="text-center h4">Product Table</p>
      <table className="table table-bordered">
        <thead>
          <tr className="text-center table-primary">
            <th width="10%">Sr No</th>
            <th width="40%">Title</th>
            <th width="20%">Price</th>
            <th width="10%">Rate</th>
            <th width="20%">Feedback count</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>Rs.{product.price}</td>
                <td>{product.rating.rate}</td>
                <td>{product.rating.count}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default Table;
