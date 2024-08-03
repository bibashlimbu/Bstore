import { SHIPPING_PERCENTAGE } from "../utils/constant";
import supabase from "./supabase";
import { v4 as uuidv4 } from "uuid";

export async function createOrderAndCustomer(customer, orders) {
  const { data, error } = await supabase
    .from("customer")
    .insert([customer])
    .select();

  if (error) {
    console.log(error);
    throw new Error("could not create customer");
  } else {
    const customerId = data[0].id;
    const customerEmail = data[0].email;

    // Insert orders into the order table
    const orderInsertions = orders.map(async (order) => {
      // Generate a new UUID for the order
      const orderId = uuidv4();

      // Insert the order with the new UUID
      return supabase.from("order").insert({
        ...order,
        id: orderId,
        productId: order.id,
        customerEmail: customerEmail,
        customerId: customerId,
        shippingPercent: SHIPPING_PERCENTAGE,
      });
    });

    const orderResults = await Promise.all(orderInsertions);

    for (const result of orderResults) {
      const { data: orderData, error: orderError } = result;
      if (orderError) {
        console.error(orderError);
      }
    }
  }

  return data;
}
