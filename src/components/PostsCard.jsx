import { Box, Grid, Paper, Typography } from "@mui/material";
import PostAddIcon from "@mui/icons-material/PostAdd";

const PostsCard = ({ posts }) => {
  return (
    <Paper elevation={8} sx={{ borderRadius: 2 }}>
      <Box sx={{ padding: 2 }}>
        <Grid item xs={4}>
          <Box sx={{ display: "flex", gap: 1 }}>
            <PostAddIcon
              fontSize="small"
              sx={{
                backgroundColor: "#6c63ff",
                borderRadius: "50%",
                color: "white",
                padding: 1,
              }}
            />
            <Typography variant="subtitle1">Posts</Typography>
          </Box>

          <Typography variant="h4">{posts}</Typography>
        </Grid>
      </Box>
    </Paper>
  );
};

export default PostsCard;
