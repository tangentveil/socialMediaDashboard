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

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Likes</Typography>
            <Typography variant="h5">{post.likes}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Comments</Typography>
            <Typography variant="h5">{post.comments}</Typography>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default PostsDisplay;
