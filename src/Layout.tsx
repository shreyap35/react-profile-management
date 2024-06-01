import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Box } from "@mui/material";

export const Layout: React.FC = () => {
  return (
    <Box className="flex">
      <Sidebar />
      <Outlet />
    </Box>
  );
};
