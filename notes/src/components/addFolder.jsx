import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAllFolders} from '../store/actions/index'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


const AddFolder = () => {
  const classes = useStyles();
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()

}
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField style={{padding: " auto 10px auto 10px"}} id="standard-basic" label="Add Folder" /> 
    </form>
  );
}

export default AddFolder;