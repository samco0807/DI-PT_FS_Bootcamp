import { Children } from "react";
import React, {createContext, useState,  ReactNote} from React
import axios from "axios";

interface AuthContextProps{
    token: string|null
    login: (email:string, password:string)=>Promise<void>
    logout:()=>void;
}

export const AuthContext = createContext<AuthContextProps>({
    token:null,
    login:async()=>{},
    logout:()=>{}
})

export const AuthProvider: React.FC<{children: ReactNote}>=({Children})=>{
    const [token, setToken]=useState
}