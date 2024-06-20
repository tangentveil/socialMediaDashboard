import { Box, Container } from "@mui/material";
import "./App.css";
import { ContentArea, Navbar } from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <Container sx={{ marginTop: 4 }}>
        <Box sx={{ flexGrow: 1 }}>
          <ContentArea />
        </Box>
      </Container>
    </>
  );
};

export default App;
