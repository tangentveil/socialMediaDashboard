import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import LikesCard from "./LikesCard";
import FollowersCard from "./FollowersCard";
import PostsCard from "./PostsCard";

const MetricsDisplay = () => {
  const metrics = useSelector((state) => state.metrics);

  const { likes, followers, posts } = metrics;

  return (
    <Grid
      container
      spacing={2}
      sx={{
        flexDirection: {
          xs: "column",
          sm: "row",
        },
      }}
    >
      <Grid item sm={4}>
        <LikesCard likes={likes} />
      </Grid>

      <Grid item sm={4}>
        <FollowersCard followers={followers} />
      </Grid>

      <Grid item sm={4}>
        <PostsCard posts={posts} />
      </Grid>
    </Grid>
  );
};

export default MetricsDisplay;
