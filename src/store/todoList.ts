import { create } from 'zustand';

// 定义Todo元素的状态接口
interface Todo {
    id: string;
    name: string;
    completed: boolean;
    selected: boolean;
}
// 定义TodoList的状态接口
export interface TodoListState {
    todoList: Todo[];
}

export const useTodoList = create<TodoListState>((set) => ({
    todoList: []
}));