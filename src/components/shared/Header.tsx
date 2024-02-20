import { NavLink } from "react-router-dom";
import Container from "./Container";
import logo from "../../assets/Images/logo.png";
import { Button } from "../ui/button";
import { useContext } from "react";
import { AuthContext } from "@/Provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const hadleLogout = () => {
    logOut()
      .then(() => {
        localStorage.removeItem("car-access-token");
      })
      .catch((err) => console.error(err));
  };
  return (
    <Container>
      <nav className="h-20 flex flex-col md:flex-row items-center justify-between shadow-sha-bottom">
        <NavLink to="/" className="flex justify-center items-center">
          <img className="size-14" src={logo} alt="" />
          <h1 className="text-primary font-medium text-2xl">
            F Distri<span className="text-secondary font-semibold">b</span>ution
          </h1>
        </NavLink>
        <ul className="space-x-5 text-lg font-semibold">
          <NavLink to="/supplies">All Supplies</NavLink>
          {user ? (
            <>
              <NavLink to="/dashboard">Dashboard</NavLink>
              <Button onClick={hadleLogout} className="text-lg">
                <NavLink to="/">Logout</NavLink>
              </Button>
            </>
          ) : (
            <Button className="text-lg">
              <NavLink to="/login">Login</NavLink>
            </Button>
          )}
        </ul>
      </nav>
    </Container>
  );
};

export default Header;
