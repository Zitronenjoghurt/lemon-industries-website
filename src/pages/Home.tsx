import { Container, Grid, styled } from '@mui/material';
import NavBar from '../components/NavBar';
import InfoCard from '../components/InfoCard';
import ImageCard from '../components/ImageCard';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const Home = () => {
  const infoCards = [
    { title: 'Info Title 1', description: 'Info Description 1' },
    { title: 'Info Title 2', description: 'Info Description 2' },
    { title: 'Info Title 3', description: 'Info Description 3' },
  ];

  const imageCards = [
    { imageUrl: 'url1', buttonLabel: 'Button 1' },
    { imageUrl: 'url2', buttonLabel: 'Button 2' },
    { imageUrl: 'url3', buttonLabel: 'Button 3' },
  ];

  return (
    <Container >
        <NavBar />
        <Offset sx={{mb: 5}}/>
        <Grid container spacing={2}>
            {infoCards.map((card, index) => (
              <Grid item xs={12} sm={4} key={`info-${index}`}>
                <InfoCard title={card.title} description={card.description} />
              </Grid>
            ))}
            {imageCards.map((card, index) => (
              <Grid item xs={12} sm={4} key={`image-${index}`}>
                <ImageCard
                  imageUrl={card.imageUrl}
                  buttonLabel={card.buttonLabel}
                />
              </Grid>
            ))}
        </Grid>
    </Container>
  );
};

export default Home;