import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import NotFound from "./pages/notFound/NotFound";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Layout = ({ children }) => {

  return (
    <>
      <Navbar />
      {children}
      <Footer />
      </>
  );
};

const PrivateRoute = ({ children }) => {
  const { token } = useSelector((state) => state.login);
  if (token) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}

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
        {
          path: "/profile",
          element: 
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    
      <RouterProvider router={router} />
    
  );
}

export default App;
