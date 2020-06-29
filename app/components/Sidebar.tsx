import {
  Drawer,
  Typography,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Avatar,
} from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/CalendarToday';
import ShoppingCartIcon from '@material-ui/icons/People';
import PeopleIcon from '@material-ui/icons/Folder';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    backgroundColor: '#F6F6F6',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  profile: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
    alignItems: 'center',
  },
  doctorName: {
    fontSize: '12',
  },
}));

type Props = {
  open: any;
  handleDrawerClose: any;
};

const doctorName = 'Cérine BENSADI';
const doctorSpeciality = 'Pédiaterie';

export default function Sidebar({ open, handleDrawerClose }: Props) {
  const classes = useStyles();
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <Typography
          component="h1"
          variant="h5"
          color="inherit"
          noWrap
          className={classes.title}
          align="center"
        >
          Hopital
        </Typography>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <div className={classes.profile}>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          className={classes.large}
          style={{ border: '2px solid #4DDBBC' }}
        />
        <div>
          <Typography
            variant="subtitle2"
            color="inherit"
            noWrap
            className={classes.doctorName}
          >
            {`Dr. ${doctorName}`}
          </Typography>
          <Typography
            variant="caption"
            color="inherit"
            noWrap
            className={classes.doctorName}
            display="block"
          >
            {`Spéciliste en ${doctorSpeciality}`}
          </Typography>
        </div>
      </div>
      <Divider />
      <List>
        <div>
          <Link to={routes.CONSULT}>
            <ListItem button>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText
                primary="Consultations"
                style={{ color: 'black' }}
              />
            </ListItem>
          </Link>
          <ListItem button>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <Link to={routes.PATIENTS}>
              <ListItemText primary="Patients" style={{ color: 'black' }} />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Signal " />
          </ListItem>
        </div>
      </List>
      <Divider />
      <List>
        <div>
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <Link to={routes.PATIENTS}>
              <ListItemText primary="Options" />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <Link to={routes.PATIENTS}>
              <ListItemText primary="Centre d'aide" />
            </Link>
          </ListItem>
        </div>
      </List>
    </Drawer>
  );
}
