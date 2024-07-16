import React from "react";
import { useParams } from "react-router-dom";
import { getproductById } from "../../fetching/product.fetching";

const ProductDetails = () => {
  const { pid } = useParams();
  console.log("Details", pid);
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getproductById(pid)
      .then((producto) => {
        setProduct(producto);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>{product.Nombre}</h1>
    </div>
  );
};

export default ProductDetails;
