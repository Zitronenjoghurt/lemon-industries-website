import { Container, Typography, styled } from '@mui/material';
import NavBar from '../components/NavBar';
import AccordionGroup from '../components/AccordionGroup';
import projectEntries from '../data/projectEntries.json';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const Projects = () => {
  return (
    <Container >
        <NavBar />
        <Offset sx={{mb: 1}}/>
        <Typography style={{marginBottom: 5, fontSize: 50, fontWeight: 'bold', textAlign: 'center'}}>
            Projects
        </Typography>
        <Typography style={{marginBottom: 10, fontSize: 18, fontStyle: 'italic', textAlign: 'center'}}>
            Fun projects I am currently working on <br/>
            or may have already put on ice in the past
        </Typography>
        <AccordionGroup entries={projectEntries}></AccordionGroup>
    </Container>
  );
};

export default Projects;