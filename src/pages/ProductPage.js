import Header from "../components/Header";
import { useParams } from "react-router-dom";

function ProductPage() {
    const pathParams = useParams();
    console.log(pathParams)
  return (
    <section>
      <Header />
      <h1>Awesome product {pathParams.id}</h1>
      <img src="https://loremflickr.com/320/240/dog" alt="Product" />
    </section>
  );
}

export default ProductPage;