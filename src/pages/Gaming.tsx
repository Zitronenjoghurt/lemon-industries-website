import { useState, useEffect } from 'react';
import { Container, Typography, styled, Grid } from '@mui/material';
import NavBar from '../components/NavBar';
import MediaCard from '../components/MediaCard';
import gamesData from '../data/games.json';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

interface Game {
    title: string;
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
                Here I am showcasing some of my most favorite games
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                {games.map((game, index) => (
                    <Grid item xs={8} sm={6} md={4} key={index}>
                        <MediaCard
                            title={game.title}
                            description=''
                            buttonLabel='Steam'
                            buttonUrl=''
                            imageUrl=''
                            imageAlt=''
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