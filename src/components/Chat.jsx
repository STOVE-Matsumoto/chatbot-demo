import React from 'react'

const Chat = () => {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary="Brunch this weekend?"
        secondary={
          <React.Fragment>
          <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
          >
              Ali Connors
            </Typography>
            {" — I'll be in your neighborhood doing errands this…"}
        </React.Fragment>
        }
      />
   </ListItem>
  );
}

export default Chat;