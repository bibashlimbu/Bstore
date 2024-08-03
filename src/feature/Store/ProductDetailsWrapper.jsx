import { useGetProduct } from "./useGetProduct";
import Spinner from "../../ui/Spinner";
import TopSection from "../../ui/TopSection";
import StyledContainer from "../../ui/Container";
import RelatedProducts from "../Search/RelatedProducts";
import { useGetProducts } from "./useGetProducts";
import GoBackButton from "../../ui/GoBackButton";
import ProductDetails from "./ProductDetails";

function ProductDetailsWrapper() {
  const { product, isLoading } = useGetProduct();
  const { products } = useGetProducts();

  if (isLoading) return <Spinner />;

  return (
    <>
      <TopSection>
        <StyledContainer>
          <GoBackButton />
          <ProductDetails product={product} />
        </StyledContainer>
      </TopSection>
      <RelatedProducts products={products} resultantProducts={[product]} />
    </>
  );
}

export default ProductDetailsWrapper;
