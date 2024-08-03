import { Divider } from "@mui/material";
import { useGetProducts } from "../feature/Store/useGetProducts";
import Spinner from "../ui/Spinner";
import CollectionList from "./CollectionList";
function CollectionSection() {
  const { products, isLoading } = useGetProducts();

  if (isLoading) return <Spinner />;

  const latestDrops = products.filter(
    (product) => product.collection === "latestDrops"
  );

  const weeklyPicks = products.filter(
    (product) => product.collection === "weeklyPicks"
  );
  return (
    <>
      <CollectionList collection={latestDrops} collectionName="Latest Drops" />
      <Divider />
      <CollectionList collection={weeklyPicks} collectionName="Weekly Picks" />
    </>
  );
}

export default CollectionSection;
