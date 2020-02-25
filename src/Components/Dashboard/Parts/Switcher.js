import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function Switcher(props) {
  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
    props.handleViewModeToggle(checked); //send prev state
    setChecked(props.position);    
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch checked={props.position} onChange={toggleChecked} />}
        label={props.position&&props.labelLeft||props.labelRight}      
      />
    </FormGroup>
  );
}

