import React, { createContext, useState, useContext } from 'react';

const SidebarContext = createContext();

export const useSidebar = () => {
    return useContext(SidebarContext);
};

export const SidebarProvider = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const [toggled, setToggled] = React.useState(false);
    const [broken, setBroken] = React.useState(false);


    const handleToggleSidebarSmall = () => {
        setToggled(!toggled)
    };

    const handleToggleSidebar = () => {
        setCollapsed(!collapsed)
    };

    return (
        <SidebarContext.Provider
            value={{
                collapsed,
                handleToggleSidebarSmall,
                handleToggleSidebar,
                broken,
                toggled,
                setToggled,
                setBroken

            }}
        >
            {children}
        </SidebarContext.Provider>
    );
};
