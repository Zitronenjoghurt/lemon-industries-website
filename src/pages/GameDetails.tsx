import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import gamesData from '../data/games.json';
import { Box, Container, Paper, Typography } from '@mui/material';
import NavBar from '../components/NavBar';
import Carousel from '../components/Carousel';

interface Image {
  url: string;
  title: string;
}

interface Game {
    title: string;
    id: string;
    date: string;
    shortDescription: string;
    images: Image[];
    entries: { title: string; description: string }[];
}

const GameDetails = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const [game, setGame] = useState<Game | null>(null);

  useEffect(() => {
    if (!gameId) {
        return;
      }

    const gameData = gamesData.find(game => game.id === decodeURIComponent(gameId));
    setGame(gameData ?? null);
  }, [gameId]);

  if (!game) {
    return <div>Game does not exist...</div>;
  }

  return (
    <Container>
      <NavBar />
      
      <Typography variant="h3" gutterBottom align="center" mt={10}>
        {game.title}
      </Typography>
      <Typography variant="subtitle1" gutterBottom align="center" style={{whiteSpace: 'pre-line'}}>
        {game.shortDescription}
      </Typography>
      
      <Box display="flex" justifyContent="center" my={2}>
        <Carousel images={game.images} />
      </Box>
      <Typography variant="subtitle2" gutterBottom align="center" style={{whiteSpace: 'pre-line'}}>
        Article added on: {game.date}
      </Typography>
      {game.entries?.map((entry, index) => (
        <Paper key={index} elevation={3} sx={{ p: 2, mb: 2 }}>
          <Typography variant="h5" gutterBottom align="center" fontWeight={"bold"}>
            {entry.title}
          </Typography>
          <Typography variant="body1" style={{whiteSpace: 'pre-line', textAlign: 'justify'}}>{entry.description}</Typography>
        </Paper>
      ))}
    </Container>
  );
};

export default GameDetails;