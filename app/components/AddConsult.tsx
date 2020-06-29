import React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  makeStyles,
  createStyles,
  createMuiTheme,
  Grid,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  Button,
  ThemeProvider,
} from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff4400',
    },
    secondary: {
      main: '#4DDBBC',
    },
  },
});

const useStyles = makeStyles((t) =>
  createStyles({
    root: {
      display: 'flex',
      marginTop: '18px',
      flexGrow: 1,
    },
    paper: {
      width: '100%',
      padding: t.spacing(4),
      backgroundColor: '#F6F6F6',
    },
  })
);

export default function AddConsult() {
  const classes = useStyles(theme);
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Paper className={classes.paper} variant="outlined">
          <form>
            <Grid container spacing={2}>
              <Grid item xs={4} style={{ margin: 'auto' }}>
                <Typography variant="h6" color="inherit" noWrap>
                  Motif
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  placeholder="Outlined"
                  variant="outlined"
                  style={{ backgroundColor: 'white', outline: 'none' }}
                  color="secondary"
                />
              </Grid>
              <Grid item xs={4} style={{ margin: 'auto' }}>
                <Typography variant="h6" color="inherit" noWrap>
                  Symptomes
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <FormControl
                  fullWidth
                  variant="outlined"
                  style={{ backgroundColor: 'white' }}
                  color="secondary"
                >
                  <Select
                    native
                    placeholder="Symptomes"
                    inputProps={{
                      name: 'age',
                      id: 'outlined-age-native-simple',
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4} style={{ margin: 'auto' }}>
                <Typography variant="h6" color="inherit" noWrap>
                  Ordonnances
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Button variant="contained" startIcon={<CloudUploadIcon />}>
                  Importer un fichier
                </Button>
              </Grid>
              <Grid item xs={4} style={{ margin: 'auto' }}>
                <Typography variant="h6" color="inherit" noWrap>
                  Observations
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  style={{
                    backgroundColor: 'white',
                    borderColor: 'transparent',
                  }}
                  id="outlined-multiline-static"
                  multiline
                  fullWidth
                  rows={4}
                  defaultValue="Default Value"
                  variant="outlined"
                  color="secondary"
                />
              </Grid>
              <Grid item xs={10} />
              <Grid item xs={2}>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ color: 'white' }}
                >
                  Confirmer
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </div>
    </ThemeProvider>
  );
}
