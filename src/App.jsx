import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Search from "./Pages/Search";
import Store from "./Pages/Store";
import Account from "./Pages/Account";
import PageNotFound from "./Pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import Category from "./Pages/Category";
import Collection from "./Pages/Collection";
import Product from "./Pages/Product";
import Signup from "./Pages/Signup";
import Order from "./Pages/Order";
import OrderDetails from "./feature/orders/OrderDetails";
import ProtectedRoute from "./ui/ProtectedRoute";
import AccountDetails from "./Pages/AccountDetails";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="order" element={<Order />} />
            <Route path="order/:customerId" element={<OrderDetails />} />
            <Route path="categories/:categoryName" element={<Category />} />
            <Route path="collection/:collectionName" element={<Collection />} />
            <Route path="product/:ProductId" element={<Product />} />
            <Route path="search" element={<Search />} />
            <Route path="store" element={<Store />} />
            <Route path="account" element={<Account />} />
            <Route
              path="account/info"
              element={
                <ProtectedRoute>
                  <AccountDetails />
                </ProtectedRoute>
              }
            />
            <Route path="account/signup" element={<Signup />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
    </QueryClientProvider>
  );
}

export default App;
