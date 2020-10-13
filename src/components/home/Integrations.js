import { Box, Card, CardContent, Container, Grid, Hidden, makeStyles, Paper, Typography } from "@material-ui/core";
import { GitHub } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  paper: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    borderRadius: 0,
    padding: theme.spacing(3, 0)
  },
  card: {
    backgroundColor: theme.palette.secondary.main,
    // padding: theme.spacing(1, 0)
  },
  gradientCard: {
    backgroundImage: 'linear-gradient(125deg, #7287e5, #9c68ec, #a96384, ##df663a)',
    width: '100%',
    height: 250,
    borderRadius: 0,
    border: '5px solid #40c8b0',
  }
}))

const tools = [
  {
    icon: <GitHub style={{fontSize: '40px'}} />,
    title: `Automate tracking with GitHub`,
    text: `Linear integrates with your pull requests and Sentry issues.`
  },
  {
    icon: <GitHub style={{fontSize: '40px'}} />,
    title: `Preview and embed full Figma designs`,
    text: `Add Figma links to any issue as you work on your designs.`
  },
  {
    icon: <GitHub style={{fontSize: '40px'}} />,
    title: `Get updates and create issues with Slack`,
    text: `Receive updates directly in your Slack channels and create issues 
      from discussions.`
  },
  {
    icon: <GitHub style={{fontSize: '40px'}} />,
    title: `Connect with 1000+ tools using Zapier`,
    text: `Create new issues based on triggers from Zapier apps.`
  },
  {
    icon: <GitHub style={{fontSize: '40px'}} />,
    title: `Custom workflows using our APIs`,
    text: `Query and mutate data using GraphQL API to build custom workflows.`
  }
]

export default function Integrations() {
  const classes = useStyles()
  return (
    <>
      <Paper className={classes.paper}>
        <Container maxWidth="lg">
          <Box pb={3}>
            <Typography
              variant="h5"
              component="div"
              color="textPrimary"
              gutterBottom
            >
              <b>{`Integrated with your tools`}</b>
            </Typography>
            <div>
              <Typography component="span" variant="h6" color="textSecondary">
                {`Linear keeps everyone aligned and working more efficiently.
                Engineers, designers, and peers - all collaborating in one tool.
                `}
              </Typography>
            </div>
          </Box>
          <Grid container>
            {tools.map((item, n) => (
              <Grid item xs={12} key={n} style={{padding: '10px 0'}}>
                <Card className={classes.card} elevation={12}>
                  <CardContent>
                    <Grid container alignItems="center">
                      <Grid item xs={3}>
                        <div> { item.icon } </div>
                      </Grid>
                      <Grid item xs={9}>
                        <div>
                          <Typography component="span" variant="body1">
                            { item.title }
                          </Typography>
                        </div>
                        <div>
                          <Typography component="span" variant="subtitle1" color="textSecondary">
                            { item.text }
                          </Typography>
                        </div>
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
  )
}
