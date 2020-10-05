import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

CardPage.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  elevation: PropTypes.number,
};

export default function CardPage({ title, elevation = 1, children }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignSelf="center"
      justifySelf="center"
      p={3}
    >
      {title && (
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
      )}
      <Paper p={2} elevation={elevation}>
        {children}
      </Paper>
    </Box>
  );
}
