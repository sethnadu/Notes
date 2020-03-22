import React, {useContext} from 'react';
import {ContainerDiv, ContainerDivMobile, Title, TopDiv, Border} from './container-styles'
import {AuthContext} from "../Auth"

// Material UI Icons
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

// Media Queries
import useMediaQuery from "@material-ui/core/useMediaQuery"

const Container = ({open}) => {
    const tabletSize = useMediaQuery("(max-width:860px)");
    const {currentUser} = useContext(AuthContext)
    return (
        <>
        {!open ? !tabletSize ? (
            <ContainerDiv>
                <TopDiv>
                    <AddIcon style={{marginTop: "27px"}}/>
                    <Title>NoteBooks</Title>
                    <EditIcon style={{marginTop: "27px"}}/>
                </TopDiv>
                <Border />
            </ContainerDiv>  
        ) : (
            <ContainerDivMobile>
                <TopDiv>
                    <AddIcon style={{marginTop: "27px"}}/>
                    <Title>NoteBooks</Title>
                    <EditIcon style={{marginTop: "27px"}}/>
                </TopDiv>
                <Border />
            </ContainerDivMobile>
        ) : null}
        </>
        
    )
}

export default Container;