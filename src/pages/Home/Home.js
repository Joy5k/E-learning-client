import { createStyles, Container, Title, Text, Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import AboutSection from './AboutSection';
import FeaturesSection from './FeaturesSection';

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: '#11284b',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage:
      'linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80)',
    paddingTop: theme.spacing.xl * 3,
    paddingBottom: theme.spacing.xl * 3,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
    },
  },

  image: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  content: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: 500,
    fontSize: 48,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: 34,
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: 500,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
    },
  },

  control: {
    paddingLeft: 50,
    paddingRight: 50,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 22,

    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },
  },
}));

const Home=() =>{
  const { classes } = useStyles();
  return (
    <>
      <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              The{' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'pink', to: 'yellow' }}
              >
               E-LEARNING
              </Text>{' '}
          for  Web Development 
            </Title>

            <Text className={classes.description} mt={30}>
            We Offer An Instant Certificate.No Classroom All Online.Start Now Pay Later.. Explore More Ways To Use pc with eLearning. Book a Demo. Contact us. Enterprise Support. Help Centre Available. Desktop Version Available.
              </Text>

            <Link    to='/courses'>
            <Button
           
              variant="gradient"
              gradient={{ from: 'pink', to: 'yellow' }}
              size="xl"
              className='bg-gradient-to-r from-pink-800 to-yellow-600 to-gray-400bg-gradient-to-r from-gray-400'
              mt={40}
            >
              Get started
            </Button>
            </Link>
          </div>
        </div>
      </Container>
      
      </div>
    <AboutSection className='w-full'></AboutSection>
      <FeaturesSection></FeaturesSection>
    </>
  );
}
export default Home;