import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import svg from "../assets/tweetstorm.svg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentIcon from "@mui/icons-material/Comment";

const PostsDisplay = () => {
  const post = {
    title: "Sample Post Title",
    datePosted: "June 20, 2024",
    content: "This is a sample post content. It could be an image or text.",
    likes: 123,
    comments: 45,
    media: svg,
  };

  return (
    <Paper elevation={8} sx={{ borderRadius: 2 }}>
      <Box sx={{ marginTop: 2, padding: 2 }}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h5" component="div">
              {post.title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" color="text.secondary">
              {post.datePosted}
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ marginY: 2 }}>
          {post.media ? (
            <CardMedia
              component="img"
              image={post.media}
              alt="Post Media"
              sx={{ maxHeight: 400, objectFit: "cover" }}
            />
          ) : (
            <Typography variant="body1" component="p">
              {post.content}
            </Typography>
          )}
        </Box>

        <Grid container spacing={2} >
          <Grid item>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <FavoriteBorderIcon
                fontSize="small"
                sx={{
                  backgroundColor: "red",
                  borderRadius: "50%",
                  color: "white",
                  padding: 1,
                }}
              />
              <Typography variant="h5">{post.likes}</Typography>
            </Box>
          </Grid>

          <Grid item xs={2}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CommentIcon
                fontSize="small"
                sx={{
                  backgroundColor: "green",
                  borderRadius: "50%",
                  color: "white",
                  padding: 1,
                }}
              />
              <Typography variant="h5">{post.comments}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default PostsDisplay;
