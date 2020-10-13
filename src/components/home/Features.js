import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { Mouse, CloudOutlined, DesktopWindowsOutlined } from "@material-ui/icons";

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
  interface: {
    backgroundImage: 'linear-gradient(145deg, #513dd3, #51d33d)',
    margin: theme.spacing(3,2,0,0),
  },
  img: {
    maxWidth: '100%'
  },
  relative: {
    position: 'relative'
  },
  absolute: {
    position: 'absolute'
  }
}));

const features = [
  {
    title: 'Built for speed',
    text: 'Synchronized in real-time across all users. No spinners or waiting.',
    icon: '< 100ms',
  },
  {
    title: 'Keyboard first design',
    text: 'Optimized for efficiency with extensive Keyboard shortcuts.',
    icon: <Mouse />,
  },
  {
    title: 'For software teams',
    text: 'Created by softwaree people for software product teams',
    icon: <DesktopWindowsOutlined />,
  },
  {
    title: 'Works offline',
    text: 'Synchronized in real-time across all users. No spinners or waiting.',
    icon: '< 100ms',
  },
  {
    title: 'Light and dark UI',
    text: 'Synchronized in real-time across all users. No spinners or waiting.',
    icon: <CloudOutlined />,
  },
  {
    title: 'Multiple teams',
    text: 'Synchronized in real-time across all users. No spinners or waiting.',
    icon: '< 100ms',
  },
]

export default function Features() {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paper}>
        <Container maxWidth="lg">
          <Box my={3} className="MuiTypography-alignCenter">
            <Typography
              variant="h5"
              component="div"
              color="textPrimary"
              align="center"
              gutterBottom
            >
              <b>{`An experience you'd expect from a professional tool.`}</b>
            </Typography>
            <Typography component="div" variant="subtitle1" color="textSecondary" align="center">
              Opinionated and designed for daily use.
            </Typography>
          </Box>
          <Box mb={5}>
            <Grid container>
              {features.map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item.title} style={{ padding: 10 }}>
                  <Card className={classes.card} elevation={12}>
                    <CardContent>
                      <div style={{color:"#513dd3", fontSize: '20px'}}>
                        { item.icon }
                      </div>
                      <Typography component="div" variant="h6">
                        { item.title }
                      </Typography>
                      <Typography component="div" variant="subtitle1" color="textSecondary">
                        { item.text }
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Paper>

      <Container>
        <Box my={5}>
          <Typography
            variant="h5"
            component="div"
            color="textPrimary"
            gutterBottom
          >
            <b>{`Interface, Streamlined.`}</b>
          </Typography>
          <div>
            <Typography component="span" variant="h6">
              <b>{`Robust. `}</b>
            </Typography>
            <Typography component="span" variant="h6" color="textSecondary">
              {`Fast to navigate. Create issues in seconds. Add priorities,
              labels and estimates.`}
            </Typography>
          </div>
          <div>
            <Typography component="span" variant="h6">
              <b>{`List and board. `}</b>
            </Typography>
            <Typography component="span" variant="h6" color="textSecondary">
              {`See your issues in either a list or board view.`}
            </Typography>
          </div>
          <div className="container">
            <img src="/img/projects.png" className="img relative" />
            <img src="/img/interface1.png" className="img absolute" />
            <style jsx>{`
              .container {
                background-image: linear-gradient(135deg, #b84870, #581848, #705068, #3850b8, #5040c8, #7880c0);
                padding: 20px 0 0 25px;
                margin: 20px 0px;
                border-radius: 10px;
                position: relative;
                top: 0;
                left: 0;
              }
              .img {
                width: 100%;
                border-radius: 10px;
              }
              .relative {
                position: relative;
                left: 30px
                top: 10px;
              }
              .absolute {
                position: absolute;
                left: 10px;
                bottom: 0;
                height: 70%;
              }
            `}</style>
          </div>
        </Box>
      </Container>

      <Container className={classes.card}>
        <Box pt={7} className="MuiTypography-alignCenter">
          <Typography
            variant="h5"
            component="div"
            color="textPrimary"
            align="center"
            gutterBottom
          >
            <b>{`Meet your command line`}</b>
          </Typography>
          <Typography component="div" variant="subtitle1" color="textSecondary" align="center">
            {`Any action can be accessed and completed in seconds with the
            command menu`}
          </Typography>
        </Box>
        <Box my={5} pb={5}>
          <div className="container">
            <img src="/img/projects.png" className="img relative" />
            <img src="/img/interface1.png" className="img absolute" />
            <style jsx>{`
              .container {
                background-image: linear-gradient(135deg, #b84870, #581848, #705068, #3850b8, #5040c8, #7880c0);
                padding: 20px 0 0 25px;
                margin: 20px 0px;
                border-radius: 10px;
                position: relative;
                top: 0;
                left: 0;
              }
              .img {
                width: 100%;
                border-radius: 10px;
              }
              .relative {
                position: relative;
                left: 30px
                top: 10px;
              }
              .absolute {
                position: absolute;
                left: 10px;
                bottom: 0;
                height: 70%;
              }
            `}</style>
          </div>
        </Box>
      </Container>

      <Container>
        <Box my={5}>
          <Typography
            variant="h5"
            component="div"
            color="textPrimary"
            gutterBottom
          >
            <b>{`Build team momentum with Cycles`}</b>
          </Typography>
          <div>
            <Typography component="span" variant="h6">
              <b>{`Velocity and estimates. `}</b>
            </Typography>
            <Typography component="span" variant="h6" color="textSecondary">
              {`Track your team's workload and velocity.`}
            </Typography>
          </div>
          <div>
            <Typography component="span" variant="h6">
              <b>{`Automated. `}</b>
            </Typography>
            <Typography component="span" variant="h6" color="textSecondary">
              {`Cycles run on an automated schedule, so you can focus on your 
              work.`}
            </Typography>
          </div>
          <div className="container">
            <img src="/img/projects.png" className="img relative" />
            <img src="/img/interface1.png" className="img absolute" />
            <style jsx>{`
              .container {
                background-image: linear-gradient(135deg, #b84870, #581848, #705068, #3850b8, #5040c8, #7880c0);
                padding: 20px 0 0 25px;
                margin: 20px 0px;
                border-radius: 10px;
                position: relative;
                top: 0;
                left: 0;
              }
              .img {
                width: 100%;
                border-radius: 10px;
              }
              .relative {
                position: relative;
                left: 30px
                top: 10px;
              }
              .absolute {
                position: absolute;
                left: 10px;
                bottom: 0;
                height: 70%;
              }
            `}</style>
          </div>
        </Box>
      </Container>

      <Container className={classes.card}>
        <Box pt={7}>
          <Typography
            variant="h5"
            component="div"
            color="textPrimary"
            gutterBottom
          >
            <b>{`Set direction with Projects`}</b>
          </Typography>
          <div>
            <Typography component="span" variant="h6">
              <b>{`Focus on the big picture. `}</b>
            </Typography>
            <Typography component="span" variant="h6" color="textSecondary">
              {`Projects let you group issues and get a birds-eye view of the 
              progress your team is making.`}
            </Typography>
          </div>
        </Box>
        <Box my={5} pb={5}>
          <div className="container">
            <img src="/img/projects.png" className="img relative" />
            <img src="/img/interface1.png" className="img absolute" />
            <style jsx>{`
              .container {
                background-image: linear-gradient(135deg, #b84870, #581848, #705068, #3850b8, #5040c8, #7880c0);
                padding: 20px 0 0 25px;
                margin: 20px 0px;
                border-radius: 10px;
                position: relative;
                top: 0;
                left: 0;
              }
              .img {
                width: 100%;
                border-radius: 10px;
              }
              .relative {
                position: relative;
                left: 30px
                top: 10px;
              }
              .absolute {
                position: absolute;
                left: 10px;
                bottom: 0;
                height: 70%;
              }
            `}</style>
          </div>
        </Box>
      </Container>
    </>
  );
}
