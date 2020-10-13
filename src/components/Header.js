import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LanguageIcon from "@material-ui/icons/Language";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { useState } from "react";
import PropTypes from "prop-types";
import Link from "../Link";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.background.default,
    zIndex: 1400,
    ...theme.mixins.container,
  },
  navBtn: {
    textTransform: "none",
    fontSize: 17,
    margin: theme.spacing(0, 1.5),
  },
  navMenu: {
    width: "100%",
    backgroundColor: theme.palette.background.default,
  },
}));

function ElevateOnScroll({ children }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevateOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function Header({ links, children }) {
  const classes = useStyles();
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <>
      <ElevateOnScroll {...children}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Box mr={1}>
              <LanguageIcon color="primary" />
            </Box>
            <Typography variant="h6" color="textPrimary">
              <b>Linear</b>
            </Typography>
            <Hidden smDown>
              <Box mx={"auto"} style={{ textAlign: "center", width: "65%" }}>
                {links.map((link, v) => (
                  <Button
                    variant="text"
                    key={v}
                    component={Link}
                    naked
                    href={link.to}
                    className={classes.navBtn}
                  >
                    {link.name}
                  </Button>
                ))}
              </Box>
            </Hidden>
            <Box ml="auto">
              <ButtonGroup style={{ textAlign: "right", flexGrow: 2 }}>
                <Button
                  component={Link}
                  href="/login"
                  naked
                  variant="text"
                  size="small"
                  className={classes.navBtn}
                >
                  Login
                </Button>
                <Button
                  component={Link}
                  href="/register"
                  naked
                  size="small"
                  variant="contained"
                  color="primary"
                  className={classes.navBtn}
                >
                  Sign up
                </Button>
              </ButtonGroup>
              <Hidden mdUp>
                <IconButton
                  color="primary"
                  onClick={toggleMenu}
                >
                  {menu ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
              </Hidden>
            </Box>
          </Toolbar>
          <Divider />
        </AppBar>
      </ElevateOnScroll>
      <Toolbar />
      <Drawer
        anchor="top"
        open={menu}
        onClose={toggleMenu}
        classes={{ paper: classes.navMenu }}
      >
        <Toolbar />
        <List>
          {links.map((link, v) => (
            <ListItem key={v}>
              <ListItemText primary={link.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

Header.propTypes = {
  links: PropTypes.array,
};
