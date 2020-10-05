import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';

import Link from 'components/Link';
import LoadingContainer from 'components/LoadingContainer';
import CardPage from 'containers/layout/CardPage';
import { listArticlesRequest } from '../redux/actions';
import useStyles from './style';

export default function CheckboxListSecondary() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [checked, setChecked] = React.useState([1]);
  const { loading, list } = useSelector((state) => state.article);

  useEffect(() => {
    dispatch(listArticlesRequest());
  }, [dispatch]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <LoadingContainer loading={loading}>
      <CardPage title="Article List View">
        <List dense className={classes.root}>
          {list.map((value, index) => {
            const labelId = `checkbox-list-secondary-label-${value}`;
            return (
              <Link to={`/articles/${index}`} key={`link_${index}`}>
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar
                      alt={`Avatar n°${value + 1}`}
                      src={value.urlToImage}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    id={labelId}
                    primary={value.title}
                    secondary={value.description}
                  />
                  <ListItemSecondaryAction>
                    <Checkbox
                      edge="end"
                      onChange={handleToggle(value)}
                      checked={checked.indexOf(value) !== -1}
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              </Link>
            );
          })}
        </List>
      </CardPage>
    </LoadingContainer>
  );
}
