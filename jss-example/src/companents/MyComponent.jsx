import React from 'react';
import { createUseStyles } from 'react-jss';

//JSS styles
const useStyles = createUseStyles({
  container: {
    backgroundColor: 'lightblue',
    padding: '20px',
  },
  title: {
    color: 'red',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  description: {
    marginTop: '10px',
  },
});

const MyComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Hello , JSS!</h1>
      <p className={classes.description}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
      </p>
    </div>
  );
};

export default MyComponent;
