import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const DrawerWithNavigation = ({ open, onClose }) => {
  return (
    <Drawer open={open} onClose={onClose} className="p-4">
      <div className="mb-4 flex items-center justify-between">
        <Typography variant="h5" color="blue-gray">
          Shopsy
        </Typography>
        <IconButton variant="text" color="blue-gray" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </IconButton>
      </div>

      <List>
        <Link to="/">
          <ListItem onClick={onClose}>
            <ListItemPrefix>
              🏠
            </ListItemPrefix>
            Home
          </ListItem>
        </Link>
        <Link to="/top-events">
          <ListItem onClick={onClose}>
            <ListItemPrefix>
              📌
            </ListItemPrefix>
            Top Events
            <ListItemSuffix>
              <Chip value="5" size="sm" color="green" className="rounded-full" />
            </ListItemSuffix>
          </ListItem>
        </Link>
        <Link to="/news">
          <ListItem onClick={onClose}>
            <ListItemPrefix>
              📰
            </ListItemPrefix>
            News
          </ListItem>
        </Link>
        <Link to="/types">
          <ListItem onClick={onClose}>
            <ListItemPrefix>
              🎭
            </ListItemPrefix>
            Types of Events
          </ListItem>
        </Link>
        <Link to="/profile">
          <ListItem onClick={onClose}>
            <ListItemPrefix>
              👤
            </ListItemPrefix>
            Profile
          </ListItem>
        </Link>
      </List>

      <Button className="mt-4 ml-2" size="sm">
        Documentation
      </Button>
    </Drawer>
  );
};

export default DrawerWithNavigation;
