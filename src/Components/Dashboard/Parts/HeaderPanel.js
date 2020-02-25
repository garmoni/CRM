import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import PeopleIcon from "@material-ui/icons/People";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import PermMediaIcon from "@material-ui/icons/PermMedia";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import BuildIcon from "@material-ui/icons/Build";
import EmailIcon from '@material-ui/icons/Email';

import { Link, withRouter } from "react-router-dom";

import TextField from "@material-ui/core/TextField";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";


function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  searchForm: {
    "& > *": {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      marginBottom: theme.spacing(1),
      width: 300
    }
  },
  userName: {
    fontSize: 9,    
    fontWeight: 800,
    color: theme.palette.primary.dark
  }
}));
function HeaderPanel(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>

      <AppBar position="fixed" color="default">
        <Grid container justify="space-evenly" alignItems="center">
          <Grid item>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="secondary"

              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs"
            >
              <Tab
                label="Заказчики"
                icon={<ContactPhoneIcon />}
                component={Link}
                to="/dashboard/customers"
                textColor="primary"
                {...a11yProps(0)}
              />
              <Tab
                label="Задачи"
                icon={<FormatListNumberedIcon />}
                component={Link}
                to="/dashboard/tasks"
                {...a11yProps(1)}
              />
              <Tab
                label="Проекты"
                icon={<BusinessCenterIcon />}
                component={Link}
                to="/dashboard/projects"
                {...a11yProps(2)}
              />
              <Tab
                label="Отчеты"
                icon={<EqualizerIcon />}
                component={Link}
                to="/dashboard/reports"
                {...a11yProps(3)}
              />
              <Tab
                label="Отдел сервиса"
                icon={<BuildIcon />}
                component={Link}
                to="/dashboard/service"
                {...a11yProps(4)}
              />
              <Tab
                label="Сотрудники"
                icon={<PeopleIcon />}
                component={Link}
                to="/dashboard/employees"
                {...a11yProps(5)}
              />

              <Tab
                label="Материалы"
                icon={<PermMediaIcon />}
                component={Link}
                to="/dashboard/files"
                {...a11yProps(6)}
              />
              <Tab
                label="Почта"
                icon={<EmailIcon />}
                component={Link}
                to="/dashboard/email"
                {...a11yProps(7)}
              />
            </Tabs>
          </Grid>
          <Grid item>
            <form
              className={classes.searchForm}
              noValidate
              autoComplete="on"
              onSubmit={props.handleSearchSubmit}
            >
              <TextField
                id="search-field"
                label="Поиск"
                onChange={props.handleSearchChange}
              />
            </form>
          </Grid>
          <Grid item>
            <Grid item >
              <Typography
                className={classes.userName}
              >
                {props.userName}
              </Typography>
            </Grid>
            <Grid item>
              <Button
                startIcon={<ExitToAppIcon />}
                onClick={props.handleClickLogOut}
              >
                Выход
            </Button>
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
}
export default withRouter(HeaderPanel);