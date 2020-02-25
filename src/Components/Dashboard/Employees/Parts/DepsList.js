import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
  }
}));

export default function CRMList(props) {
  
  const classes = useStyles();
  const {itemsList,onItemSelect}=props;
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    onItemSelect(event,index);
  };

  return (
    <div className={classes.root}>
      <List component="nav">
        {itemsList.map((item, i) => (
          <ListItem
            button
            key={i}
            selected={selectedIndex === i}
            onClick={event => handleListItemClick(event, i)}
          >
            <ListItemText primary={item} className="Dep" />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
