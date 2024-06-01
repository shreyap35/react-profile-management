import { Box } from "@mui/material";
import { Layout } from "./Layout";
import { Router } from "./Router";

function App() {
  return (
    <Box className="flex">
      <Layout />
      <Router />
    </Box>
  );
}

export default App;
