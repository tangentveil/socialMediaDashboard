import { Card, CardContent, Typography, Grid, Paper, Box } from "@mui/material";
import { useSelector } from "react-redux";
import LikesCard from "./LikesCard";
import FollowersCard from "./FollowersCard";
import PostsCard from "./PostsCard";

const MetricsDisplay = () => {
  const metrics = useSelector((state) => state.metrics);

  const { likes, followers, posts } = metrics;

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <LikesCard likes={likes} />
        </Grid>

        <Grid item xs={4}>
          <FollowersCard followers={followers} />
        </Grid>

        <Grid item xs={4}>
          <PostsCard posts={posts} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MetricsDisplay;
