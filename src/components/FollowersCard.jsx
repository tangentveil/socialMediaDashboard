import { Box, Grid, Paper, Typography } from "@mui/material";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";

const FollowersCard = ({ followers }) => {
  return (
    <Paper elevation={8} sx={{ borderRadius: 2 }}>
      <Box sx={{ padding: 2 }}>
        <Grid item xs={4}>
          <Box sx={{ display: "flex", gap: 1 }}>
            <PersonAddAltIcon
              fontSize="small"
              sx={{
                backgroundColor: "#38bdf8",
                borderRadius: "50%",
                color: "white",
                padding: 1,
              }}
            />

            <Typography variant="subtitle1">Followers</Typography>
          </Box>
          <Typography variant="h4">{followers}</Typography>
        </Grid>
      </Box>
    </Paper>
  );
};

export default FollowersCard;
