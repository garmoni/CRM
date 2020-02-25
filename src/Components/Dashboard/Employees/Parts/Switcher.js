import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './Switcher.css';
import index from "../../../../Store/Reducers";

export default function Switcher(props) {
  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
    props.handleViewModeToggle(checked); //send prev state
    setChecked(props.position);
  };

  return (
    <FormGroup className="blockSwitcher">
        <span>Вид по сотрудникам</span>
      <FormControlLabel
        control={<Switch checked={props.position} onChange={toggleChecked} />}
        label={props.position}
      />
        <span>Вид по подразделениям</span>
    </FormGroup>
  );
}

