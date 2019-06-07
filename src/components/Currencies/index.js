import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  '@global': {
    body: {
      display: 'flex',
      justifyContent: 'center',
      background: '#9e9c98'
    }
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '10rem'
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '3rem'
  },
  formControl: {
    marginTop: '1rem'
  },
  button: {
    width: '8rem',
    marginTop: '1rem'
  }
}));

const currencies = [
  { value: 'USD', title: 'Dollar USD', id: 1 },
  { value: 'EUR', title: 'Euro EUR', id: 2 },
  { value: 'UAH', title: 'Гривня UAH', id: 3 },
  { value: 'RUB', title: 'Рубль RUB', id: 4 }
];

const Currencies = ({ name, value, onChange, onSubmit }) => {
  const classes = useStyles();
  return (
    <Container className={classes.container} maxWidth="md">
      <Typography className={classes.header} variant="h2">
        Hello, {name}!
      </Typography>
      <Typography variant="h5" gutterBottom>
        Which currency you’d like to use to convert from today’s Bitcoin value?
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Currency</InputLabel>
        <Select value={value} onChange={onChange}>
          {currencies.map(({ value, title, id }) => (
            <MenuItem
              key={id}
              value={value}
            >
              {title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        variant="outlined"
        className={classes.button}
        onClick={onSubmit}
        disabled={!value}
      >
        confirm
      </Button>
    </Container>
  )
};

export default Currencies;