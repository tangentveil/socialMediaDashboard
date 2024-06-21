import { Box, Paper, Typography } from "@mui/material";
import Avatar from "../assets/avatar.svg";

const UserProfile = ({ userProfile }) => {
  const { name, bio } = userProfile;

  return (
    <Paper elevation={8} sx={{ borderRadius: 2 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 2,
        }}
      >
        <Typography variant="h4">
          Welcome
          <Typography sx={{ fontSize: 30, fontWeight: 600 }} color="primary">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Bio: {bio}
          </Typography>
        </Typography>

        <Box>
          <img src={Avatar} alt="User Avatar" className="image" />
        </Box>
      </Box>
    </Paper>
  );
};

export default UserProfile;
