import supabase from "./supabase";

export async function getOrder(id) {
  let { data, error } = await supabase
    .from("order")
    .select("*")
    .eq("customerId", id);

  if (error) {
    console.log(error);
    throw new Error("could not get order");
  }

  return data;
}

export async function getOrders(currentUserEmail) {
  // const loginEmail = "cekifad246@digdy.com";
  let { data, error } = await supabase
    .from("order")
    .select("*")
    .eq("customerEmail", currentUserEmail);

  if (error) {
    console.log(error);
    throw new Error("could not get order");
  }

  return data;
}
