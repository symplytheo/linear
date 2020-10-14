import { Button, Container, Grid, IconButton, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"
import { Facebook, Instagram, Twitter } from "@material-ui/icons";
import Link from './Link'

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.secondary.main,
    width: "100%",
    color: "white",
    borderRadius: 0,
    padding: theme.spacing(3, 0),
    textAlign: 'center'
  }
}));

export default function Footer({ links }) {
  const classes = useStyles()
  return (
    <>
      <Paper className={classes.paper}>
        <Container>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12} sm={10} md={4}>
              <Typography component="span" variant="subtitle1">
                {new Date().getFullYear()}
                {` Linear.io - All rights reserved`}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={10} md={4}>
              {links.map((link, v) => (
                <Button
                  variant="text"
                  key={v}
                  component={Link}
                  naked
                  href={link.to}
                  size="small"
                  style={{textTransform: 'capitalize'}}
                >
                  {link.name}
                </Button>
              ))}
            </Grid>
            <Grid item xs={12} sm={10} md={4} style={{color: 'white'}}>
              {[<Facebook />, <Twitter />, <Instagram />].map((icon, n) => (
                <IconButton key={n} style={{color: 'white'}}>
                  { icon }
                </IconButton>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </>
  )
}