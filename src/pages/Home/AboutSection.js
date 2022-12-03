import {
    createStyles,
    Image,
    Container,
    Title,
    Button,
    Group,
    Text,
    List,
    ThemeIcon,
  } from '@mantine/core';
  import { IconCheck } from '@tabler/icons';
  import image from '../../Assets/img.svg';
  
  const useStyles = createStyles((theme) => ({
    inner: {
      display: 'flex',
          justifyContent: 'space-between',
      paddingTop: theme.spacing.xl * 4,
      paddingBottom: theme.spacing.xl * 4,
      },
     
  
    content: {
      maxWidth: 480,
      marginRight: theme.spacing.xl * 3,
  
      [theme.fn.smallerThan('md')]: {
        maxWidth: '100%',
        marginRight: 0,
      },
      },
    
  
    title: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontSize: 44,
      lineHeight: 1.2,
      fontWeight: 900,
  
      [theme.fn.smallerThan('xs')]: {
        fontSize: 28,
      },
    },
  
    control: {
      [theme.fn.smallerThan('xs')]: {
        flex: 1,
      },
    },
  
    image: {
      flex: 1,
  
      [theme.fn.smallerThan('md')]: {
        display: 'none',
      },
    },
  
    highlight: {
      position: 'relative',
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      borderRadius: theme.radius.sm,
      padding: '4px 12px',
      },
  }));
  
const AboutSection=()=> {
    const { classes } = useStyles();
    return (
      <div className='w-full'>
        <Container >
          <div className={classes.inner}>
            <div className={classes.content}>
              <Title className={classes.title}>
                 <span className={classes.highlight}>E-learning</span> is<br /> Online training platform
              </Title>
              <Text color="dimmed" mt="md">
              Here you can get your programming lesson .We have already six lessons available.
                        </Text>
  
              <List
                mt={30}
                spacing="sm"
                size="sm"
                icon={
                  <ThemeIcon size={20} radius="xl">
                    <IconCheck size={12} stroke={1.5} />
                  </ThemeIcon>
                }
              >
                <List.Item>
                  <b>The Complete 2022 Web Development</b> – The course make you from beginner to advance
                </List.Item>
                <List.Item>
                  <b>Learn PHP</b> – This is PHP also this course created for beginner
                </List.Item>
                <List.Item>
                  <b>Learn Python</b> –This is Python also this course created for beginner
                </List.Item>
                <List.Item>
                  <b>Oracle SQL - Step by Step SQL</b> 
                </List.Item>
                <List.Item>
                  <b>Learn Ethical Hacking From Scratch</b>
                </List.Item>
              </List>
  
              <Group mt={30}>
                <Button className='text-black font-bold hover:text-white bg-red-100 border border-spacing-1' radius="xl" size="md"  >
                  Get started
                </Button>
                <Button variant="default" radius="xl" size="md" classNames={classes.control}>
                  Source code
                </Button>
              </Group>
            </div>
            <Image src={image} className={classes.image} />
          </div>
        </Container>
      </div>
    );
}
export default AboutSection;