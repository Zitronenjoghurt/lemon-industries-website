import { useState, useEffect } from 'react';
import { Container, Typography, styled, Grid } from '@mui/material';
import NavBar from '../components/NavBar';
import MediaCard from '../components/MediaCard';
import gamesData from '../data/games_overview.json';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

interface Game {
    title: string;
    description: string;
    websiteName: string;
    websiteUrl: string;
    imageUrl: string;
}

const Gaming = () => {
    const [games, setGames] = useState<Game[]>([]);

    useEffect(() => {
        setGames(gamesData);
    }, []);

    return (
        <Container >
            <NavBar />
            <Offset sx={{ mb: 1 }} />
            <Typography style={{ marginBottom: 5, fontSize: 50, fontWeight: 'bold', textAlign: 'center' }}>
                Favorite Games
            </Typography>
            <Typography style={{ marginBottom: 20, fontSize: 18, fontStyle: 'italic', textAlign: 'center' }}>
                Here I am showcasing some of my most favorite games<br/>
                Click on "More Info" to see my full thoughts about the game
            </Typography>
            <Grid container spacing={2} justifyContent="center" alignItems="stretch">
                {games.map((game, index) => (
                    <Grid item xs={8} sm={6} md={4} key={index} style={{ display: 'flex' }}>
                        <MediaCard
                            title={game.title}
                            description={game.description}
                            button1Label={game.websiteName}
                            button1Url={game.websiteUrl}
                            button2Label='More Info'
                            button2Url={`/game/${encodeURIComponent(game.title)}`}
                            imageUrl={game.imageUrl}
                            imageAlt='Thumbnail image for {game.title}'
                            imageHeight={200}
                            cardWidth={400}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Gaming;