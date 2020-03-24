import React from 'react';
import {ContainerDiv, ContainerDivMobile, Title, TopDiv, Border, BottomDiv, SignUpButton} from './container-styles'
import {useDispatch} from 'react-redux'
import {logoutUser} from '../store/actions/index'


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
    const dispatch = useDispatch();
    console.log(props)

    const handleLogout = () => {
        dispatch(logoutUser())
    }
    return (
        <>
        {!props.open ? !tabletSize ? (
            <ContainerDiv>
                <TopDiv>
                    <AddIcon style={{marginTop: "27px"}}/>
                    <Title>NoteBooks</Title>
                    <EditIcon style={{marginTop: "27px"}}/>
                </TopDiv>
                <Border />
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
                    <AddIcon style={{marginTop: "27px"}}/>
                    <Title>NoteBooks</Title>
                    <EditIcon style={{marginTop: "27px"}}/>
                </TopDiv>
                <Border />
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