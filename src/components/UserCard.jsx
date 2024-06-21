import React, { useState } from "react";
import {
  Typography,
  Button,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Box,
  Paper,
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonIcon from "@mui/icons-material/Person";

const UserCard = ({ userProfile }) => {
  const [userList, setUserList] = useState(userProfile.users);

  const handleFollowToggle = (id) => {
    setUserList((prevState) =>
      prevState.map((user) =>
        user.id === id ? { ...user, followed: !user.followed } : user
      )
    );
  };

  return (
    <Paper elevation={8} sx={{ borderRadius: 2 }}>
      <Box sx={{ padding: 2 }}>
        <Typography variant="h6">Suggestions</Typography>

        <Box sx={{ margin: "auto" }}>
          <List>
            {userList.map((user) => (
              <ListItem key={user.id} alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={user.name} src={user.avatar} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="h6" component="div">
                      {user.name}
                    </Typography>
                  }
                />
                <Button
                  variant="text"
                  // color={user.followed ? "secondary" : "primary"}
                  onClick={() => handleFollowToggle(user.id)}
                  // sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  {user.followed ? (
                    <PersonIcon
                      fontSize="small"
                      sx={{
                        backgroundColor: "#3f3d56",
                        borderRadius: "50%",
                        color: "white",
                        padding: 1,
                      }}
                    />
                  ) : (
                    <PersonAddIcon
                      fontSize="small"
                      sx={{
                        backgroundColor: "#6c63ff",
                        borderRadius: "50%",
                        color: "white",
                        padding: 1,
                      }}
                    />
                  )}
                </Button>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Paper>
  );
};

export default UserCard;
