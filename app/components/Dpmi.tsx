import React from 'react';
import {
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Paper,
  Typography,
  Avatar,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paperSmall: {
      padding: theme.spacing(1),
      textAlign: 'left',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
    },
    profileContainer: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
      alignItems: 'center',
    },
    large: {
      width: theme.spacing(5),
      height: theme.spacing(5),
    },
    info: {
      color: theme.palette.text.secondary,
    },
  })
);

export default function Dpmi() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2} style={{ padding: 0 }}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Typography variant="h6">Informations personnelles</Typography>
                <div>
                  <div className={classes.profileContainer}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                      className={classes.large}
                      style={{ border: '2px solid #4DDBBC' }}
                    />
                    <div>
                      <Typography variant="subtitle2" color="inherit" noWrap>
                        SAIEM Malak
                      </Typography>
                      <Typography
                        variant="caption"
                        className={classes.info}
                        color="inherit"
                        noWrap
                        display="block"
                      >
                        hm_saiem@esi.dz
                      </Typography>
                    </div>
                  </div>
                </div>
                <Grid container spacing={1}>
                  <Grid item xs={4}>
                    <Paper className={classes.paperSmall} elevation={0}>
                      <Typography variant="subtitle2">NSS</Typography>
                      <Typography variant="caption" className={classes.info}>
                        00445566778899
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper className={classes.paperSmall} elevation={0}>
                      <Typography variant="subtitle2">N° Téléphone</Typography>
                      <Typography variant="caption" className={classes.info}>
                        00445566778899
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper className={classes.paperSmall} elevation={0}>
                      <Typography variant="subtitle2">Adresse mail</Typography>
                      <Typography variant="caption" className={classes.info}>
                        hm_saiem@esi.dz
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper className={classes.paperSmall} elevation={0}>
                      <Typography variant="subtitle2">Sexe</Typography>
                      <Typography variant="caption" className={classes.info}>
                        Femme
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper className={classes.paperSmall} elevation={0}>
                      <Typography variant="subtitle2">
                        Date de naissance
                      </Typography>
                      <Typography variant="caption" className={classes.info}>
                        00445566778899
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper className={classes.paperSmall} elevation={0}>
                      <Typography variant="subtitle2">
                        Groupe sanguin
                      </Typography>
                      <Typography variant="caption" className={classes.info}>
                        O +
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper className={classes.paperSmall} elevation={0}>
                      <Typography variant="subtitle2">Adress</Typography>
                      <Typography variant="caption" className={classes.info}>
                        Rue A , BBA
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper className={classes.paperSmall} elevation={0}>
                      <Typography variant="subtitle2">
                        Lieu de naissance
                      </Typography>
                      <Typography variant="caption" className={classes.info}>
                        BBA
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper className={classes.paperSmall} elevation={0}>
                      <Typography variant="subtitle2">
                        Situation familial
                      </Typography>
                      <Typography variant="caption" className={classes.info}>
                        Célibataire
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper} style={{ height: '33vh' }}>
                <Typography variant="h6">Liste des consultations</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} style={{ height: '86vh' }}>
            <Typography variant="h6">Informations médicales</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
