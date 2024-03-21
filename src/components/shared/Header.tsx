import { NavLink } from "react-router-dom";
import Container from "./Container";
import logo from "../../assets/Images/logo.png";
import { Button } from "../ui/button";
import { useContext, useState } from "react";
import { AuthContext } from "@/Provider/AuthProvider";
import { Switch } from "antd";

const light = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
    />
  </svg>
);

const dark = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
    />
  </svg>
);

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const hadleLogout = () => {
    logOut()
      .then(() => {
        localStorage.removeItem("car-access-token");
      })
      .catch((err) => console.error(err));
  };
  const handleDarkModer = () => {
    setDarkMode(!darkMode);
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Whenever the user explicitly chooses light mode
    localStorage.theme = "light";

    // Whenever the user explicitly chooses dark mode
    localStorage.theme = "dark";

    // Whenever the user explicitly chooses to respect the OS preference
    localStorage.removeItem("theme");
  };

  return (
    <Container>
      <nav className="dark:bg-slate-900 h-20 flex flex-col md:flex-row items-center justify-between shadow-sha-bottom">
        <NavLink to="/" className="flex justify-center items-center">
          <img className="size-14" src={logo} alt="" />
          <h1 className="text-primary font-medium text-2xl">
            F Distri<span className="text-secondary font-semibold">b</span>ution
          </h1>
        </NavLink>
        <ul className="space-x-5 text-lg font-semibold">
          <NavLink to="/supplies">All Supplies</NavLink>
          <Switch
            checkedChildren={light}
            unCheckedChildren={dark}
            onClick={handleDarkModer}
          />
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
