import React from 'react';
import {ContainerDiv, ContainerDivMobile, Title, TopDiv} from './container-styles'

// Material UI Icons
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

// Media Queries
import useMediaQuery from "@material-ui/core/useMediaQuery"

const Container = ({open}) => {
    const tabletSize = useMediaQuery("(max-width:860px)");
    return (
        <>
        {!open ? !tabletSize ? (
            <ContainerDiv>
                <TopDiv>
                    <AddIcon style={{marginTop: "28px"}}/>
                    <Title>NoteBooks</Title>
                    <EditIcon style={{marginTop: "28px"}}/>
                </TopDiv>
            </ContainerDiv>  
        ) : (
            <ContainerDivMobile>
                <TopDiv>
                    <AddIcon style={{marginTop: "28px"}}/>
                    <Title>NoteBooks</Title>
                    <EditIcon style={{marginTop: "28px"}}/>
                </TopDiv>
            </ContainerDivMobile>
        ) : null}
        </>
        
    )
}

export default Container;