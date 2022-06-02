import * as React from "react";
import globalStyles from "../styles/useGlobalStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import firebase from "firebase";
import { useRouter } from "next/router";
import { useAppSelector, useAppDispatch, Authenticaters } from "../stores";

// Global値
const SIDE_BAR_PAGES = (props: { isLogined: boolean }) => {
  const basePages = [
    { name: "トップページ", href: process.env.NEXT_PUBLIC_PATH_INDEX, icon: "home" },
    { name: "ご利用規約", href: process.env.NEXT_PUBLIC_PATH_TERMS, icon: "assignment" },
    { name: "プライバシーポリシー", href: process.env.NEXT_PUBLIC_PATH_PRIVACY, icon: "security" },
    { name: "お問い合わせ", href: process.env.NEXT_PUBLIC_PATH_HELP, icon: "help_outline" },
    { name: "開発画面", href: process.env.NEXT_PUBLIC_PATH_INDEX, icon: "build" },
  ];
  if (props.isLogined) {
    basePages.push({ name: "マイページ", href: process.env.NEXT_PUBLIC_PATH_MYPAGE, icon: "person" });
  } else {
    basePages.push({ name: "会員登録", href: process.env.NEXT_PUBLIC_PATH_SIGNUP, icon: "person_add" });
    basePages.push({ name: "ログイン", href: process.env.NEXT_PUBLIC_PATH_SIGNIN, icon: "person" });
  }
  return basePages;
};

const useStyle = makeStyles((theme) =>
  createStyles({
    toolbar: {
      height: 56,
      paddingTop: 4,
      paddingBottom: 4,
      [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
        height: 48,
      },
      [theme.breakpoints.up("sm")]: {
        height: 64,
      },
    },
  })
);

const Layout: React.FC = (props) => {
  const gClasses = globalStyles();
  const lClasses = useStyle();
  const [anchor, setAnchor] = React.useState<boolean>(false);
  const authentication = useAppSelector((e) => e.auth);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const menuHundle = () => setAnchor(!anchor);
  const openHundle = () => setAnchor(true);
  const closeHundle = () => setAnchor(false);
  const logOutHundle = () => {
    dispatch(Authenticaters.updateLoginStatus(false));
    firebase.auth().signOut();
    router.push(process.env.NEXT_PUBLIC_PATH_SIGNIN);
  };
  const handleSiteTitleClick = () => {
    router.push(process.env.NEXT_PUBLIC_PATH_INDEX);
  };

  return (
    <div>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <div className={lClasses.toolbar}>
            <img
              style={{ objectFit: "contain", height: "100%" }}
              src={process.env.NEXT_PUBLIC_SITE_LOGO_URL}
              onClick={handleSiteTitleClick}
              alt="site logo"
              width="100%"
              height="100%"
            />
          </div>
          <div style={{ flexGrow: 1 }} />
          {authentication.isLogin && (
            <IconButton color="inherit" onClick={logOutHundle} aria-label="logout">
              <Icon>exit_to_app</Icon>
            </IconButton>
          )}
          <IconButton color="inherit" onClick={menuHundle} aria-label="open drawer">
            <Icon>menu</Icon>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer and innner component */}
      <SwipeableDrawer anchor="top" open={anchor} onOpen={openHundle} onClose={closeHundle}>
        <List>
          {SIDE_BAR_PAGES({ isLogined: authentication.isLogin })
            .filter((e) => e.href !== router.pathname)
            .map((item, index) => (
              <ListItem key={index} button onClick={() => router.push(item.href)} style={{ width: "100%" }}>
                <ListItemIcon>
                  <Icon color="inherit">{item.icon}</Icon>
                </ListItemIcon>
                <ListItemText color="inherit" primary={item.name} style={{ paddingRight: "5em" }} />
              </ListItem>
            ))}
        </List>
      </SwipeableDrawer>
      <div className={gClasses.toolbar} style={{ marginBottom: "1em" }} />
      {props.children}
    </div>
  );
};

export default Layout;
