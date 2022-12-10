import React from "react";
import "../../css/Sidebar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SidebarOptions from "./SidebarOptions";
import { Button } from "@mui/material";
function Sidebar() {
  return (
    <div className="sidebar">
      {/*twitter icon */}
      <TwitterIcon />

      {/*sidebar option */}
      <SidebarOptions active text="Home" Icon={HomeIcon} />
      <SidebarOptions text="Explore" Icon={SearchIcon} />
      <SidebarOptions text="Notifications" Icon={NotificationsNoneIcon} />
      <SidebarOptions text="Messages" Icon={MailOutlineIcon} />
      <SidebarOptions text="Bookmarks" Icon={BookmarkBorderIcon} />
      <SidebarOptions text="Lists" Icon={ListAltIcon} />
      <SidebarOptions text="Profile" Icon={PermIdentityIcon} />
      <SidebarOptions text="More" Icon={MoreHorizIcon} />

      {/*button->tweet material ui button */}
      <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
    </div>
  );
}

export default Sidebar;
