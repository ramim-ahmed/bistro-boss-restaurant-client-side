import { CgMenuLeftAlt } from "react-icons/cg";
import { NavLink } from "react-router-dom";
// import logo from "../assets/top-bar-logo.png";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
export default function Nav() {
  const navRoutes = [
    {
      path: "/",
      level: "Home",
    },
    {
      path: "/menu",
      level: "Menu",
    },
    {
      path: "/shop",
      level: "Shop",
    },
    {
      path: "/contact-us",
      level: "Contact",
    },
  ];
  const navItem = navRoutes.map(({ path, level }, idx) => (
    <NavLink key={idx} to={path}>
      {level}
    </NavLink>
  ));
  return (
    <div className="bg-black bg-opacity-70 fixed z-10 right-0 left-0">
      <div className="max-w-screen-xl mx-auto px-3 text-white">
        <div className="flex justify-between items-center py-4 px-3 ">
          <div className="flex items-center space-x-2">
            <div className="lg:hidden block">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <CgMenuLeftAlt className="w-6 h-6 text-black" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <div className="space-y-3 mt-5">
                    {navRoutes
                      .concat({ path: "/login", level: "Login" })
                      .map(({ path, level }, idx) => (
                        <div key={idx}>
                          <NavLink to={path}>
                            <SheetClose asChild>
                              <Button
                                variant="outline"
                                className="w-full flex justify-between"
                                type="submit"
                              >
                                {level}
                              </Button>
                            </SheetClose>
                          </NavLink>
                        </div>
                      ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            <h1>Bistro Boss</h1>
          </div>
          <div className="flex items-center space-x-5">
            <div className="space-x-5 hidden lg:block">{navItem}</div>
            <div>
              <NavLink to="/login">Login</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
