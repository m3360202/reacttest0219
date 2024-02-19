import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import '../assets/css/main.css';

import { useTodoList } from '../store/todoList';
import { useActions } from '../store/uiActions';

import { generateRandomId } from '../utils/utils';

export default function CreateItem(): React.JSX.Element {

    const [input, setInput] = useState<string>('');

    const saveItem = () => {
        if (input.length > 0) {
            const item = {
                id:generateRandomId(),
                name:input,
                completed:false,
                selected:false
            }
            const oldList = useTodoList.getState().todoList;

            useTodoList.setState({todoList:[...oldList,item]});
            useActions.setState({showPopup:false});
        }
        else{
            alert('Please enter a name for the item');
        }
    }

    return (
        <Box sx={{width:'300px', m: 1,display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',padding:'20px 40px' 
            }}
        >
            <TextField
                id="item-name"
                label="Item name"
                style={{minWidth:'300px'}}
                onChange={(e) => setInput(e.target.value)}
            />
            <Button onClick={saveItem} variant="contained" style={{marginTop:'16px'}}>Creat Todo Item</Button>
        </Box>

    );
}