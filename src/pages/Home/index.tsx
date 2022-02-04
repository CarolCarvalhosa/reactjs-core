import React from "react";
import { useStyles } from "./styles";
import AppComponent from "../../components/AppComponent";

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppComponent />
    </div>
  );
};

export default Home;
