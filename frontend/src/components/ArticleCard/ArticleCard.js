import React, { useState } from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import useStyles from './style';

export default function ArticleCard({ data, onSave, isSaving }) {
  const {
    author,
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    content,
  } = data;
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleSave = () => {
    onSave(data);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="article-detail" className={classes.avatar}>
            {author[0] ? author[0] : 'A'}
          </Avatar>
        }
        title={author}
        subheader={publishedAt}
      />
      {urlToImage && (
        <CardMedia
          className={classes.media}
          image={urlToImage}
          title="Article Image"
        />
      )}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="Add to favorites"
          onClick={handleSave}
          disabled={isSaving}
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{title}</Typography>
          <Typography paragraph>{content}</Typography>
          <Box>
            <a href={url} target="_blank">
              See the full article...
            </a>
          </Box>
        </CardContent>
      </Collapse>
    </Card>
  );
}
