import React, { useState, useEffect } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';

import '../assets/css/main.css';

import CreateItem from '../components/CreateItem';
import ItemList from '../components/ItemList';
import Control from '../components/Control';
import Footer from '../components/Footer';

import { useActions } from '../store/uiActions';

export default function App():React.JSX.Element {
    const { showPopup } = useActions((store)=>store);

    const handleOpen = () => {
        useActions.setState({showPopup:true});
    };

    const handleClose = () => {
        useActions.setState({showPopup:false});
    };

    return (
        <Box>
            <Box className="bg"></Box>
            <Box className="main">
                <Box className="contain">
                    <Box className="title">TODO</Box>

                    <Box className="createItem" id="createItem" onClick={handleOpen}>
                        Create a new todo...
                    </Box>
                    <Dialog onClose={handleClose} open={showPopup}>
                        <DialogTitle>Create a todo item</DialogTitle>
                        <CreateItem />
                    </Dialog>

                    <Box className="createItem">
                        <ItemList />
                        <Control />
                    </Box>

                </Box>

            </Box>
            <Footer />
        </Box>
    );
}