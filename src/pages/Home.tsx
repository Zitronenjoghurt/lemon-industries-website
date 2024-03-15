import Container from '@mui/material/Container';
import NavBar from '../components/NavBar';
import { styled } from '@mui/material';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const Home = () => {
  return (
    <Container >
        <NavBar />
        <Offset />

    </Container>
  );
};

export default Home;