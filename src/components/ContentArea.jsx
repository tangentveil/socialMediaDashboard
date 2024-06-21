import { Container, Box, Grid } from "@mui/material";
import {
  UserProfile,
  MetricsDisplay,
  PostsDisplay,
  UserCard,
} from "../components";
import { useSelector } from "react-redux";

const ContentArea = () => {
  const userProfile = useSelector((state) => state.userProfile);
  const post = useSelector((state) => state.userProfile.post[0]);

  return (
    <Container sx={{ marginBottom: 4 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <UserProfile userProfile={userProfile} />
          </Grid>

          <Grid item xs={12} md={8}>
            <MetricsDisplay />
            <PostsDisplay post={post} media={post.media} />
          </Grid>

          <Grid item xs={12} md={4}>
            <UserCard userProfile={userProfile} />
            <PostsDisplay post={post} content={post.content} />
            <PostsDisplay post={post} content={post.content} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ContentArea;
