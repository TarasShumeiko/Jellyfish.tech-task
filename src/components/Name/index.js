import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
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
  textField: {
    width: '9rem'
  },
  link: {
    textDecoration: 'none'
  },
  button: {
    width: '8rem'
  },
  input: {
    display: 'none'
  }
}));

const Name = ({ history }) => {
  const classes = useStyles();
  const [name, setName] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name) {
      history.push('/currencies');
    }
  };

  return (
    <form className={classes.container} onSubmit={handleSubmit}>
      <TextField
        label="Enter your name:"
        className={clsx(classes.textField)}
        onChange={event => setName(event.target.value)}
        margin="dense"
      />
      <Button
        type="submit"
        className={classes.button}
        disabled={!name}
      >
        confirm
      </Button>
    </form>
  );
};

export default Name;