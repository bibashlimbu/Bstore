import supabase from "./supabase";

export async function getProducts({ sortBy, searchQuery }) {
  let query = supabase.from("products").select("*");
  // console.log(sortBy);

  // sorting;
  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("could not fetch products");
  }

  return data;
}

export async function getProduct(id) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("could not fetch product");
  }
  return data;
}
