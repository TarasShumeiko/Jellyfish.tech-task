import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  '@global': {
    body: {
      display: 'flex',
      justifyContent: 'center',
      background: '#9e9c98'
    }
  },
  card: {
    marginTop: '10rem'
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1rem'
  },
  button: {
    width: '8rem',
    marginTop: '1rem'
  }
}));

const Bitcoin = ({ currency, onClick }) => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`https://apiv2.bitcoinaverage.com/indices/global/ticker/short?crypto=BTC&fiat=${currency}`);
      const data = await result.json();
      console.log('data', data);
      setValue(data[`BTC${currency}`].last)
    };
    fetchData();
  });

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2" className={classes.header}>
          1 BTC cost
        </Typography>
        <Typography variant="h3" component="h2">
          {Math.round(value)} {currency}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onClick}>back</Button>
      </CardActions>
    </Card>
  );
};

export default Bitcoin;