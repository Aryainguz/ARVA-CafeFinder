"use client"

import { createContext, useState } from "react";

export const filterContext = createContext<any>(null);

export const FilterContextProvider = ({ children }:any) => {
    const [filter,setFilter] = useState<any>(null)

    return (
        <filterContext.Provider value={{ filter,setFilter }}>
            {children}
        </filterContext.Provider>
    );
}
    