import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import '../assets/css/main.css';
import done from '../assets/img/done.png';

import { TodoListState, useTodoList } from '../store/todoList';

export default function ItemList(): React.JSX.Element {
    const { todoList } = useTodoList((store: TodoListState) => store);

    const selectItem = (id: string) => {
        const oldList = useTodoList.getState().todoList;
        const newList = oldList.map((item) => {
            if (item.id === id) {
                item.selected = !item.selected;
            }
            return item;
        });
        useTodoList.setState({ todoList: newList });
    }

    return (
        <Box>
            {todoList.length > 0 && (<FormGroup>
                {todoList.map((item) => {
                    return (
                        <>
                            <Box key={item.id} className="item">
                            {item.completed ? (<img src={done} style={{width:'16px',height:'16px',marginRight:'8px'}}  />) : (<Checkbox checked={item.selected} onChange={selectItem.bind(this, item.id)}  />)}
                                {item.completed ? (<Typography style={{ textDecoration: 'line-through', color: '#ccc' }}>{item.name}</Typography>) : (<Typography>{item.name}</Typography>)}
                            </Box>
                            <Divider />
                        </>
                    );
                })
                }
            </FormGroup>)}
        </Box>

    );
}