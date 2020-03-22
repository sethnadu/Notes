import React, {useState} from 'react';
import Container from './container'
import Note from './note'
import Header from './header'

const Main = () => {
    const [open, setOpen]= useState(true)

    const handleOpenChange = () => {
        setOpen(!open)
    }
    // console.log(open)
    return (
        <>
        <Header open = {open} setOpen={setOpen} handleOpenChange={handleOpenChange}/>
        <div style={{display: 'flex'}}>
            <Container open = {open} setOpen={setOpen} handleOpenChange={handleOpenChange}/>
            <Note open = {open}/>
        </div>
        </>
    )
}

export default Main;