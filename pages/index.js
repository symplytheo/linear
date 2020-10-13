import Layout from '../src/components/layout';
import { Box, Button, Container, Typography } from '@material-ui/core';
// Icons
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import LanguageIcon from '@material-ui/icons/Language'
// Page Components
import Title from '../src/components/Title.js';
import Features from '../src/components/home/Features'
import Testimonials from '../src/components/home/Testimonials.js'
import Integrations from '../src/components/home/Integrations.js';

export default function Index() {
  return (
    <Layout>
      <Title title="Welcome to Linear" />
      <Container maxWidth="md" className="MuiTypography-alignCenter">
        <Box my={8}>
          <Typography component="span" variant="subtitle1" color="primary">
            INTRODUCING LINEAR
          </Typography>
          <Box my={2}>
            <Typography component="span" variant="h4" color="textPrimary">
              <b>The issue tracking tool you'll enjoy using</b>
            </Typography>
          </Box>
          <Box my={3}>
            <Typography component="span" variant="h6" color="textSecondary">
              {`Linear helps streamline software projects, sprints, tasks, and
              bug tracking. It's built for high-performance teams`}
            </Typography>
          </Box>
          <Button color="primary" variant="contained" size="large">
            <Box component="span" style={{textTransform: 'none'}} px={2}>
              Sign up for free
            </Box>
            <ArrowForwardIcon />
          </Button>
        </Box>

        <Box component="div" my={3}>
          <div style={{border: '1px solid #513dd3', padding: '10px'}}>
            <div style={{border: '1px solid #513dd3'}}>
              <img src="/img/screenshot.jpg" style={{maxWidth: '100%'}} />
            </div>
          </div>
        </Box>
      </Container>


      {/* Features section */}
      <Features />

      {/* Integrations section */}
      <Integrations />

      {/* Testimonial section */}
      <Testimonials />

      {/* CTA section */}
      <Container maxWidth="md" className="MuiTypography-alignCenter">
        <Box my={10}>
          <LanguageIcon color="primary" style={{fontSize: 60}} />
          <Box my={3}>
            <Typography component="span" variant="h4" color="textPrimary">
              <b>Get started with Linear today.</b>
            </Typography>
          </Box>
          <Box my={3}>
            <Typography component="span" variant="h6" color="textSecondary">
              {`Linear keeps everyone aligned and working without friction.
              Engineers, designers, and peers - all collaborating in one tool.`}
            </Typography>
          </Box>
          <Button color="primary" variant="contained" size="large">
            <Box component="span" px={2} style={{textTransform: 'none'}}>
              Sign up for free
            </Box>
            <ArrowForwardIcon />
          </Button>
        </Box>
      </Container>
    </Layout>
  );
}