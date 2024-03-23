import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import gamesData from '../data/games.json';
import { Box, Container, Paper, Typography, styled } from '@mui/material';
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
    entries: { title: string; description: string }[];
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
    <Container>
      <NavBar />
      <Offset sx={{ mb: 5 }} />
      
      <Typography variant="h3" gutterBottom align="center">
        {game.title}
      </Typography>
      <Typography variant="subtitle1" gutterBottom align="center" style={{whiteSpace: 'pre-line'}}>
        {game.shortDescription}
      </Typography>
      <Box display="flex" justifyContent="center" my={5}>
        <Carousel images={game.images} />
      </Box>
      {game.entries?.map((entry, index) => (
        <Paper key={index} elevation={3} sx={{ p: 2, mb: 2 }}>
          <Typography variant="h5" gutterBottom align="center" fontWeight={"bold"}>
            {entry.title}
          </Typography>
          <Typography variant="body1">{entry.description}</Typography>
        </Paper>
      ))}
    </Container>
  );
};

export default GameDetails;