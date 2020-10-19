import React, { useContext } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { Divider } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { NavContext } from "./context/NavContext";
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});
const knownUsers = [
  { id: "ad533b8d-5812-4908-bf79-7bf82b66ed0d", name: "Taro" },
  { id: "b026a43b-aa93-400e-b828-12968fdd5ad0", name: "Jane" },
  { id: "81650738-c431-4598-a573-5407f9de7d34", name: "Grant" },
];
export default function SwipeableTempDrawer({ toggleDrawer, drawerState }) {
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const classes = useStyles();
  const [state, dispatch] = useContext(NavContext);

  const setAppPage = (appPage) => {
    dispatch({
      type: "CHANGE_PAGE",
      appPage,
    });
  };
  const setPerson = (person) => {
    dispatch({
      type: "CHANGE_PERSON",
      payload: { user: person },
    });
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {knownUsers.map(({ name, id }) => (
          <ListItem
            onClick={() => {
              setPerson({ name, id });
            }}
            button
            key={id}
          >
            <ListItemText primary={name} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["About", "Reviews", "Books"].map((text, index) => {
          text = text.toLowerCase();
          return (
            <ListItem
              onClick={() => {
                setAppPage(text);
              }}
              button
              key={index}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );

  return (
    <div>
      {/* <Router> */}
      {["top"].map((anchor) => (
        <React.Fragment key={anchor}>
          <SwipeableDrawer
            disableBackdropTransition={!iOS}
            disableDiscovery={iOS}
            anchor={anchor}
            open={drawerState[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
      {/* </Router> */}
    </div>
  );
}
