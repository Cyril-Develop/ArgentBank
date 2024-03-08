import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import NotFound from "./pages/notFound/NotFound";
import Transaction from "./pages/transaction/Transaction";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <Outlet />
        </Layout>
      ),

      children: [
        { path: "/", element: <Home /> },
        { path: "/login", element: <Login /> },
        { path: "/profile", element: <Profile /> },
        { path: "/transaction/:accountId", element: <Transaction /> },
      ],
    },
    {
      path:"*",
      element: <NotFound />
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
