import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import ImportBtn from "./ImportBtn";

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Credit Card Insights
        </Typography>

        <Link href="/" passHref>
          <Button>Overview</Button>
        </Link>

        <ImportBtn />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
