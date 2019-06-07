import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';

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

const Name = ({ value, onChange, onSubmit }) => {
  const classes = useStyles();
  return (
    <form className={classes.container} onSubmit={onSubmit}>
      <TextField
        label="Enter your name:"
        className={clsx(classes.textField)}
        value={value}
        onChange={onChange}
        margin="dense"
      />
      <Button
        type="submit"
        className={classes.button}
        disabled={!value}
      >
        confirm
      </Button>
    </form>
  )
};

export default Name;