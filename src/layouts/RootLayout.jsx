import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <nav>nav</nav>
      <Outlet />
      <footer>footer</footer>
    </div>
  );
}