import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.secondary.main,
    width: "100%",
    borderRadius: 0,
    padding: theme.spacing(3, 0),
  },
  card: {
    backgroundColor: theme.palette.secondary.main,
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
  }
}));

const reviews = [
  {
    name: 'Jane Doe',
    username: 'janedoe12',
    avatar: '/img/person.jpg',
    text: `We use it and we love it. Fast, keyboard shortcuts, simple & clear UI`,
    date: 'Jun 12'
  },
  {
    name: 'Ann Bell',
    username: 'annabelle',
    avatar: '/img/person.jpg',
    text: `We use it and we love it. Fast, keyboard shortcuts, simple & clear UI`,
    date: 'Feb 16'
  },
  {
    name: 'Corey Duag',
    username: 'coreyDg01',
    avatar: '/img/person.jpg',
    text: `We use it and we love it. Fast, keyboard shortcuts, simple & clear UI`,
    date: 'May 11'
  },
  {
    name: 'Nonso Martins',
    username: 'Nmartins',
    avatar: '/img/person.jpg',
    text: `We use it and we love it. Fast, keyboard shortcuts, simple & clear UI`,
    date: 'Aug 18'
  },
  {
    name: 'John Bull',
    username: 'johnsonB',
    avatar: '/img/person.jpg',
    text: `We use it and we love it. Fast, keyboard shortcuts, simple & clear UI`,
    date: 'Oct 24'
  },
  {
    name: 'Sarah Adams',
    username: 'sayrah96',
    avatar: '/img/person.jpg',
    text: `We use it and we love it. Fast, keyboard shortcuts, simple & clear UI`,
    date: 'Jul 01'
  },
  {
    name: 'Kia Ramos',
    username: 'kiaR',
    avatar: '/img/person.jpg',
    text: `We use it and we love it. Fast, keyboard shortcuts, simple & clear UI`,
    date: 'Nov 28'
  }
]

export default function Testimonial() {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paper}>
        <Container maxWidth="lg">
          <Box my={3} className="MuiTypography-alignCenter">
            <Typography component="span" variant="h5" color="textPrimary">
              <b>{`Loved by product people`}</b>
            </Typography>
          </Box>
          <Grid container justify="center">
            {reviews.map((item, n) => (
              <Grid item xs={12} sm={6} md={4} key={n} style={{ padding: 10 }}>
                <Card className={classes.card} elevation={12}>
                  <CardContent>
                    <Grid container>
                      <Grid item xs={2}>
                        <Avatar className={classes.avatar}>
                          <img src={item.avatar} />
                        </Avatar>
                      </Grid>
                      <Grid item xs={10}>
                        <Typography component="span" variant="subtitle1">
                          { item.name + " "}
                        </Typography>
                        <Typography
                          component="span"
                          variant="subtitle2"
                          color="textSecondary"
                        >
                          {'@' + item.username}
                        </Typography>
                        {`  *  `}
                        <Typography
                          component="span"
                          variant="subtitle2"
                          color="textSecondary"
                        >
                          { item.date }
                        </Typography>
                        <Typography
                          component="p"
                          variant="subtitle1"
                          color="textSecondary"
                        >
                          { item.text }
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Paper>
    </>
  );
}
