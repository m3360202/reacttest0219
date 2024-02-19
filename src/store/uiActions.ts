import { create } from 'zustand';

interface Actions {
    showPopup: boolean;
}

export const useActions = create<Actions>((set) => ({
    showPopup:false
}));