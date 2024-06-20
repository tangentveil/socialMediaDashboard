import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
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
import avatar from "../assets/avatar.svg";

// Example user data
const users = [
  {
    id: 1,
    name: "John Doe",
    avatar: avatar,
    followed: false,
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: avatar,
    followed: true,
  },
  {
    id: 3,
    name: "Jane Smith",
    avatar: avatar,
    followed: true,
  },
  {
    id: 4,
    name: "Jane Smith",
    avatar: avatar,
    followed: true,
  },
  {
    id: 5,
    name: "Jane Smith",
    avatar: avatar,
    followed: false,
  },
  // Add more users as needed
];

const UserCard = () => {
  const [userList, setUserList] = useState(users);

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
                  color={user.followed ? "secondary" : "primary"}
                  onClick={() => handleFollowToggle(user.id)}
                >
                  {user.followed ? "Unfollow" : "Follow"}
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
