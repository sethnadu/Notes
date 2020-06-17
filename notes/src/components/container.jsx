import React, {useEffect, useState} from 'react';
import {ContainerDiv, ContainerDivMobile, Title, TopDiv, Border, BottomDiv, SignUpButton} from './container-styles'
import {useDispatch, useSelector} from 'react-redux'
import {logoutUser} from '../store/actions/index'
import {addFolderTextOpen} from '../store/actions/index'
import AddFolder from './addFolder'

// Material UI Imports
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

// Material UI Icons
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';


// Media Queries
import useMediaQuery from "@material-ui/core/useMediaQuery"


const useStyles = makeStyles(theme => ({
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      color: "black",
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      color: "black",
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '20ch',
        '&:focus': {
          width: '25ch',
        },
      },
    },
  }));

const Container = (props) => {
    const tabletSize = useMediaQuery("(max-width:860px)");
    const classes = useStyles();
    const state = useSelector(state => state)
    const openAddFolder = useSelector(state => state.folderReducer.openAddFolder)
    const dispatch = useDispatch();
    let folders = state.folderReducer.allFolders[0]
    
    
    // const [newFolder, setNewFolder] = useState();
    console.log("state", state.folderReducer.allFolders[0])

    const handleLogout = () => {
      dispatch(logoutUser())
    }

    const handleOpenAddFolder = () => {
      dispatch(addFolderTextOpen(openAddFolder))
    }

    

    return (
        <>
        {!props.open ? !tabletSize ? (
            <ContainerDiv>
                <TopDiv>
                    <AddIcon onClick={handleOpenAddFolder} style={{marginTop: "27px", pointer: 'cursor'}}/>
                    <Title>NoteBooks</Title>
                    <EditIcon style={{marginTop: "27px", pointer: 'cursor'}}/>
                </TopDiv>
                {openAddFolder === true ? (
                        <AddFolder />
                    ) : null}
                <Border />
                {state.folderReducer.allFolders[0] ? folders.map((f) =>  {
                  console.log(f)
                  return <p key={f.id}>{f.name.name}</p>
                    }) :  null}
                <Border />
                <BottomDiv>
                    <SignUpButton onClick ={handleLogout}>Sign Out</SignUpButton>
                </BottomDiv>
            </ContainerDiv>  
        ) : (
            <ContainerDivMobile>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
                <TopDiv>
                    <AddIcon onClick={handleOpenAddFolder} style={{marginTop: "27px", pointer: 'cursor'}}/>
                    <Title>NoteBooks</Title>
                    <EditIcon style={{marginTop: "27px", pointer: 'cursor'}}/>
                </TopDiv>
                {openAddFolder === true ? (
                        <AddFolder />
                    ) : null}
                <Border />
                {state.folderReducer.allFolders[0] ? folders.map((f) =>  {
                  console.log(f)
                  return <p key={f.id}>{f.name.name}</p>
                    }) :  null}
                <Border />
                <BottomDiv>
                    <SignUpButton onClick ={handleLogout}>Sign Out</SignUpButton>
    
                </BottomDiv>
            </ContainerDivMobile>
        ) : null}
        </>
     
        
    )
}

export default Container;