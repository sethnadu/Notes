import React, {useState} from 'react';
import Container from './container'
import Note from './note'
import Header from './header'
import {useDispatch, useSelector} from 'react-redux'
import {getAllFolders} from '../store/actions/index'

const Main = () => {
    const [open, setOpen]= useState(true)
    const state = useSelector(state => state)
    const dispatch = useDispatch();
    const singleFolder = useSelector(state => state.folderReducer.singleFolder)

    const handleOpenChange = () => {
        setOpen(!open)
        dispatch(getAllFolders())
    }

    console.log(state)
    return (
        <>
        <Header open = {open} setOpen={setOpen} handleOpenChange={handleOpenChange}/>
        <div style={{display: 'flex'}}>
            <Container open = {open} setOpen={setOpen} handleOpenChange={handleOpenChange}/>
            <Note open = {open} singleFolder = {singleFolder}/>
        </div>
        </>
    )
}

export default Main;