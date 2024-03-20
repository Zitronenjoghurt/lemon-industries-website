import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import gamesData from '../data/games.json';
import { Container, Typography, styled } from '@mui/material';
import NavBar from '../components/NavBar';
import Carousel from '../components/Carousel';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

interface Image {
  url: string;
  title: string;
}

interface Game {
    title: string;
    shortDescription: string;
    images: Image[];
    text: string;
}

const GameDetails = () => {
  const { gameTitle } = useParams<{ gameTitle: string }>();
  const [game, setGame] = useState<Game | null>(null);

  useEffect(() => {
    if (!gameTitle) {
        return;
      }

    const gameData = gamesData.find(game => game.title === decodeURIComponent(gameTitle));
    setGame(gameData ?? null);
  }, [gameTitle]);

  if (!game) {
    return <div>Game does not exist...</div>;
  }

  return (
    <Container >
        <NavBar />
        <Offset sx={{mb: 5}}/>
        <Typography style={{marginBottom: 5, fontSize: 50, fontWeight: 'bold', textAlign: 'center'}}>
            {game.title}
        </Typography>
        <Typography style={{marginBottom: 15, fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>
            {game.shortDescription}
        </Typography>
        <Carousel images={game.images}>
        </Carousel>
    </Container>
  );
};

export default GameDetails;