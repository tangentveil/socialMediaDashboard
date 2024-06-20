import { Box, Grid, Paper, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const LikesCard = ({ likes }) => {
  return (
    <Paper elevation={8} sx={{ borderRadius: 2 }}>
      <Box sx={{ padding: 2 }}>
        <Grid item xs={4}>
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
            <Typography variant="subtitle1">Likes</Typography>
          </Box>
          <Typography variant="h4">{likes}</Typography>
        </Grid>
      </Box>
    </Paper>
  );
};

export default LikesCard;
