import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface CardProps {
    title: string;
    description: string;
};

function InfoCard({ title, description }: CardProps) {
    return (
        <Box sx={{ minWidth: 275, height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Card variant="outlined" sx={{ backgroundColor: "#272727", display: 'flex', flexDirection: 'column', height: '100%' }}>
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ textAlign: 'center', color: 'white', fontWeight: 1000, letterSpacing: .5 }} variant="h5" component="div">
                        {title}
                    </Typography>
                    <Paper elevation={7} sx={{ mt: 2, p: 2, backgroundColor: "#272727", flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'top' }}>
                        <Typography sx={{ color: 'white' }} style={{ textAlign: 'justify' }}>
                            {description}
                        </Typography>
                    </Paper>
                </CardContent>
            </Card>
        </Box>
    );
};

export default InfoCard;