import { useNavigate } from 'react-router-dom';

import { Typography, Button } from '@mui/material';

import { useData } from '../DataContext';

export const Results = () => {
  const { data } = useData();
  const navigate = useNavigate();

  return (
    <>
      <Typography component="h2" variant="h5">
        Results:
      </Typography>
      <p>{JSON.stringify(data, null, 4)}</p>

      <Button onClick={() => navigate('/')}>Go to start</Button>
    </>
  );
};
