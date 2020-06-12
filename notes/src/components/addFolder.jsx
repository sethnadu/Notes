import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAllFolder, addFolder} from '../store/actions/index'

// Material UI 
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline'
  },
}));


const AddFolder = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const [addNewFolder, setAddNewFolder] = useState({
        name: ""
    });

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(addFolder(addNewFolder))
        }

    const handleChanges = (name) => event => {
        setAddNewFolder({...addNewFolder, [name]: event.target.value})
    }

  return (
    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
      <TextField style={{padding: " auto 10px auto 10px"}} id="standard-basic" label="Add Folder" onChange={handleChanges}/>
      <AddIcon onClick={handleSubmit} />
    </form>
  );
}

export default AddFolder;