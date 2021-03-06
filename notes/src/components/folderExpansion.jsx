import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Note from './note'
// Store imports
import {getSingleFolderNotesById} from '../store/actions/index'

// Material UI Imports
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';


const ExpansionPanel = withStyles({
  root: {
    // border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    // '&:not(:last-child)': {
    //   borderBottom: 0,
    // },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    // backgroundColor: 'rgba(0, 0, 0, .03)',
    // borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);




export default function FolderExpansion({name, id}) {
  const dispatch = useDispatch()
  const state = useSelector(state => state.folderReducer.singleFolder)
  
  const [expanded, setExpanded] = React.useState('panel1');
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  
  };

  const handleGetNotes = () => {
    dispatch(getSingleFolderNotesById(id))
  }

  const handleNote = (noteId) => {
    state.map((note => {
        if(noteId === note.id){
          console.log(noteId)
        }
     }) 
     )
    
  }

  
  return (
    <div>
      <ExpansionPanel  square onChange={handleChange('panel1')}>
        <ExpansionPanelSummary onClick = {handleGetNotes} aria-controls="panel1d-content" id="panel1d-header">
          <Typography  style={{fontSize: "20px", fontWeight: 'bold'}}>{name}</Typography>
        </ExpansionPanelSummary>
          <div>
            {state.length > 0 ? ( state.map((note => {
             return <p onClick = {handleNote(note.id)} key={note.id}>{note.title}</p>
            }) 
            )) : <p>No notes in folder!</p>}
          </div>
      </ExpansionPanel>
    </div>
    
    
  );
}