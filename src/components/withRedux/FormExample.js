import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { black } from 'color-name';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Inputs() {
  const classes = useStyles();

  const [price, setPrice] = React.useState(22);

  const formStyles = {
      width: 'auto',
      background: '#212121',
      margin: '50px',
      padding: '10px',
  }

  const handleChange = (e) => {
      setPrice(e.target.value);
  }

  return (
    <React.Fragment>
        <div style={formStyles}>
            <form className={classes.root} noValidate autoComplete="off">
                <Input defaultValue="Hello world" inputProps={{ 'aria-label': 'description' }} />
                <Input placeholder="Placeholder" inputProps={{ 'aria-label': 'description' }} />
                <Input defaultValue="Disabled" disabled inputProps={{ 'aria-label': 'description' }} />
                <Input defaultValue="Error" error inputProps={{ 'aria-label': 'description' }} />
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={price}
                    onChange={handleChange}
                    style={{float: 'right', marginBottom: '50px'}}
                    >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={22}>TwentyTwo</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </form>
        </div>
    </React.Fragment>
  );
}