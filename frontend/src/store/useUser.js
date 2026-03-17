import { create } from 'zustand'


const useUser = create((set)=>({
    role : null,
    setRole : (newRole)=>set({role : newRole})
}))