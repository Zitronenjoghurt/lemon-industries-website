import { useState, useEffect } from 'react';
import { Container, Typography, styled, Grid } from '@mui/material';
import NavBar from '../components/NavBar';
import MediaCard from '../components/MediaCard';
import gamesData from '../data/games_overview.json';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

interface Game {
    title: string;
    id: string;
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
                Here I am showcasing some of my most favorite games <br/>
                Still adding more...
            </Typography>
            <Grid container spacing={2} justifyContent="center" alignItems="stretch">
                {games.map((game, index) => (
                    <Grid item xs={8} sm={6} md={4} key={index} style={{ display: 'flex' }} marginBottom={2}>
                        <MediaCard
                            title={game.title}
                            description={game.description}
                            button1Label='My thoughts'
                            button1Url={`/gaming/${encodeURIComponent(game.id)}`}
                            button2Label={game.websiteName}
                            button2Url={game.websiteUrl}
                            imageUrl={game.imageUrl}
                            imageAlt={`Thumbnail image for ${game.title}`}
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