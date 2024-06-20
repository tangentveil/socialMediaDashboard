import { Container, Box, Grid, Typography } from "@mui/material";
import {
  UserProfile,
  MetricsDisplay,
  PostsDisplay,
  UserCard,
} from "../components";
import { useSelector } from "react-redux";

const ContentArea = () => {
  const userProfile = useSelector((state) => state.userProfile);

  return (
    <Container sx={{marginBottom: 4}}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <UserProfile />
          </Grid>

          <Grid item xs={12} md={8}>
            <MetricsDisplay />
            <PostsDisplay />
          </Grid>

          <Grid item xs={12} md={4}>
            <UserCard />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ContentArea;
