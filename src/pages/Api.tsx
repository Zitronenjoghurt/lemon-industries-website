import { Button, Container, Typography, styled } from '@mui/material';
import NavBar from '../components/NavBar';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const Api = () => {
  const handleButtonClick = () => {
    window.open('https://api.lemon.industries/', '_blank');
  };

  return (
    <Container >
        <NavBar />
        <Offset sx={{mb: 10}}/>
        <Typography style={{marginBottom: 50, fontSize: 50, fontWeight: 'bold', textAlign: 'center'}}>
            API page under construction
        </Typography>
        <Typography style={{marginBottom: 15, fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>
            In the future I will add more information about this API here<br/>
            But since the it's is already up:
        </Typography>
        <Button variant="contained" color="primary" onClick={handleButtonClick} style={{display: 'block', margin: 'auto'}}>
            Check out the documentation
        </Button>
    </Container>
  );
};

export default Api;