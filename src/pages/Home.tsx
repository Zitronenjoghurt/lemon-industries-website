import { Container, Grid, styled } from '@mui/material';
import NavBar from '../components/NavBar';
import InfoCard from '../components/InfoCard';
import ImageCard from '../components/ImageCard';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const Home = () => {
  const infoCards = [
    { title: 'Welcome to Lemon Industries', description: 'This website is currently under construction, as I learn more about React and MaterialUI, I will extend it more and more. But even at this early state you can already look at some other projects I have done or try out my small little API^^ Have fun!', type: 'info' },
    { title: 'Projects', description: "On my GitHub page you can find some projects I have started for learning different kinds of concepts. These range from 'genetic simulation', to a simple fighting game skelleton, to a colonization simulator with UI, and much more! Most is unfinished as I enjoy trying out more and more stuff. As long as Im happy with the current state I'll be able to move on to the next project :)", type: 'info' },
    { title: 'API', description: "My current major project is my own API! As of right now it only acts as a way to fetch random images by category, from the ones I host. Some discord bots have commands like /hug @person and it will send a random hug gif. My API can act as a provider for such random images, while also making it easy to add them to discord embeds as they are statically hosted on my server.", type: 'info' }
  ];

  const imageCards = [
    { imageUrl: '/lemons.jpg', height: 200, buttonLabel: 'Page Code on GitHub', buttonUrl: 'https://github.com/Zitronenjoghurt/lemon-industries-website', type: 'image' },
    { imageUrl: '/coding.jpg', height: 225, buttonLabel: 'Project Overview', buttonUrl: '/projects', type: 'image' },
    { imageUrl: '/network.jpg', height: 225, buttonLabel: 'API Overview', buttonUrl: '/api', type: 'image' }
  ];

  const combinedCards = [];
  const maxLength = Math.max(infoCards.length, imageCards.length);
  for (let i = 0; i < maxLength; i++) {
    if (i % 2 === 0) {
      if (infoCards[i]) combinedCards.push(infoCards[i]);
      if (imageCards[i]) combinedCards.push(imageCards[i]);
    } else {
      if (imageCards[i]) combinedCards.push(imageCards[i]);
      if (infoCards[i]) combinedCards.push(infoCards[i]);
    }
  }

  return (
    <Container >
        <NavBar />
        <Offset sx={{mb: 5}}/>
        <Grid container spacing={2}>
            {combinedCards.map((card, index) => (
              <Grid item xs={12} sm={6} key={`${card.type}-${index}`}>
                {card.type === 'info' ? (
                  // @ts-ignore
                  <InfoCard title={card.title} description={card.description} />
                ) : (
                  <ImageCard
                  // @ts-ignore
                    imageUrl={card.imageUrl} buttonLabel={card.buttonLabel} height={card.height} buttonUrl={card.buttonUrl}
                  />
                )}
              </Grid>
            ))}
        </Grid>
        <Offset sx={{mb: 1}}/>
    </Container>
  );
};

export default Home;