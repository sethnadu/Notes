import React from 'react';
import {NoteDivOpen, NoteDivClosed} from './note-styles';

const Note = ({open}) => {
    return (
        <>
        {!open ? (
        <NoteDivOpen>
            <h2 style={{textAlign: "center"}}>this</h2>
        </NoteDivOpen>
        ) : (
            <NoteDivClosed>
                <h2 style={{textAlign: "center"}}>this</h2>
            </NoteDivClosed>
        )}
        </>
        
    )
}

export default Note;