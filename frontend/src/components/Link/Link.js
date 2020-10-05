import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    textDecoration: 'none',
    color: 'inherit',
  },
}));

const CustomLink = ({ children, ...rest }) => {
  const classes = useStyles();

  return (
    <Link {...rest} className={classes.root}>
      {children}
    </Link>
  );
};

export default CustomLink;
