import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import image from "../assets/tweetstorm.svg";
import Avatar from "../assets/avatar.svg";

const UserProfile = () => {
  const userProfile = useSelector((state) => state.userProfile);

  return (
    <Paper elevation={8} sx={{ borderRadius: 2 }}>
      <Box sx={{ display: "flex", alignItems:"center", justifyContent:"space-between", padding: 2 }}>
        <Typography variant="h4">
          Welcome{" "}
          <Typography sx={{ fontSize: 30, fontWeight: 600 }} color="primary">
            {userProfile.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Bio: {userProfile.bio}
          </Typography>
        </Typography>

        <Box>
          <CardMedia
            component="img"
            height="140"
            image={Avatar}
            alt="User Avatar"
            sx={{ width: "140px" }}
          />
        </Box>
      </Box>
    </Paper>
  );
};

export default UserProfile;
