import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

interface AccordionEntry {
  title: string;
  description: string;
  text: string;
  buttonLabel: string;
  imageUrl: string;
  buttonUrl: string;
  imageWidth: number;
}

interface AccordionGroupProps {
  entries: AccordionEntry[];
}

export default function AccordionGroup({ entries }: AccordionGroupProps) {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

    const renderButton = (buttonUrl: string) => {
      if (buttonUrl.startsWith('/')) {
        // Internal link
        return (
          <Link to={buttonUrl} style={{ color: 'inherit', marginRight: 'auto' }}>
            <IconButton>
              <span className="material-symbols-outlined">captive_portal</span>
            </IconButton>
          </Link>
        );
      } else {
        // External link
        return (
          <a href={buttonUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', marginRight: 'auto' }}>
            <IconButton>
              <span className="material-symbols-outlined">captive_portal</span>
            </IconButton>
          </a>
        );
      }
    };

  return (
    <div>
      {entries.map((entry, index) => (
        <Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}bh-content`}
            id={`panel${index}bh-header`}
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
              {renderButton(entry.buttonUrl)}
              <Typography sx={{ ml: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontWeight: 'bold' }}>{entry.title}</span>
                <span style={{ color: 'text.secondary' }}>{entry.description}</span>
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
          <Paper elevation={3} sx={{ padding: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', gap: 2 }}>
      <Typography sx={{ flex: 1, alignSelf: 'flex-start', whiteSpace: 'pre-line' }}>
        {entry.text}
      </Typography>
      <Box
        component="img"
        sx={{
          width: { xs: '100%', sm: entry.imageWidth },
          height: 'auto',
          maxWidth: { sm: '100%' },
        }}
        src={entry.imageUrl}
        alt=""
      />
    </Box>
  </Paper>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}