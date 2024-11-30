import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu, menuClasses, MenuItemStyles } from 'react-pro-sidebar';
// import "react-pro-sidebar/dist/css/styles.css";
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FaHome, FaStore, FaMagic } from "react-icons/fa";
import { useSidebar } from '../Context/SidebarContext';
import { Link } from 'react-router-dom';
import AiImageGenration from '../pages/AiImageGenration';

export default function SideMenu() {

    // const [toggled, setToggled] = React.useState(false);
    // const [broken, setBroken] = React.useState(false);
    const [rtl, setRtl] = React.useState(false);
    const [hasImage, setHasImage] = React.useState(false);
    const [theme, setTheme] = useState('light');
    const {
        collapsed,
        handleToggleSidebar,
        toggled,
        setToggled,
        setBroken,
    } = useSidebar(); // Use the context to get state and setters

    const hexToRgba = (hex, alpha) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);

        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };
    const themes = {
        light: {
            sidebar: {
                backgroundColor: '#030314',
                color: 'white',
            },
            menu: {
                menuContent: '#fbfcfd',
                icon: 'white',
                hover: {
                    backgroundColor: '#6869eb',
                    color: 'white',
                },
                disabled: {
                    color: '#9fb6cf',
                },
            },
        },
        // dark: {
        //     sidebar: {
        //         backgroundColor: '#0b2948',
        //         color: '#8ba1b7',
        //     },
        //     menu: {
        //         menuContent: '#082440',
        //         icon: '#59d0ff',
        //         hover: {
        //             backgroundColor: '#00458b',
        //             color: '#b6c8d9',
        //         },
        //         disabled: {
        //             color: '#3e5e7e',
        //         },
        //     },
        // },
    };
    const menuItemStyles = {
        root: {
            fontSize: '20px',
            fontWeight: 400,
        },
        icon: {
            color: themes[theme].menu.icon,
            [`&.${menuClasses.disabled}`]: {
                color: themes[theme].menu.disabled.color,
            },
        },
        SubMenuExpandIcon: {
            color: '#b6b7b9',
        },
        subMenuContent: ({ level }) => ({
            backgroundColor:
                level === 0
                    ? hexToRgba(themes[theme].menu.menuContent, hasImage && !collapsed ? 0.4 : 1)
                    : 'transparent',
        }),
        button: {
            [`&.${menuClasses.disabled}`]: {
                color: themes[theme].menu.disabled.color,
            },
            '&:hover': {
                backgroundColor: hexToRgba(themes[theme].menu.hover.backgroundColor, hasImage ? 0.8 : 1),
                color: themes[theme].menu.hover.color,
            },
        },
        label: ({ open }) => ({
            fontWeight: open ? 600 : undefined,
        }),
    };



    return (
        <>
            <div style={{ display: 'flex', direction: rtl ? 'rtl' : 'ltr', background: '#030314' }}>
                <Sidebar
                    collapsed={collapsed}
                    toggled={toggled}
                    onBackdropClick={() => setToggled(false)}
                    onBreakPoint={setBroken}
                    rtl={rtl}
                    breakPoint="md"
                    backgroundColor={hexToRgba(themes[theme].sidebar.backgroundColor, hasImage ? 0.9 : 1)}
                    rootStyles={{
                        color: themes[theme].sidebar.color,
                        height: '100vh'
                    }}
                >
                    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        {/* <SidebarHeader rtl={rtl} style={{ marginBottom: '24px', marginTop: '16px' }} /> */}

                        <div style={{ position: 'relative', padding: '20px', display: 'flex', alignItems: 'center' }}>
                            <h1 style={{ flex: 1 }} className='d-flex align-items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40.96px" height="40px" viewBox="0 0 256 250"><rect width="256" height="250" fill="none" /><rect width="256" height="249.6" fill="#00005b" rx="42.5" /><path fill="#99f" d="M102.843 149.333H63.172L55.1 174.454a2.02 2.02 0 0 1-1.901 1.547L32.947 176q-1.72 0-1.202-1.89l34.347-98.509l.343-1.035l.114-.354l.23-.74c.114-.382.228-.787.343-1.226c.45-2.291.68-4.62.687-6.955a1.063 1.063 0 0 1 1.202-1.202h27.306q1.2 0 1.374.859l38.983 109.335q.515 1.718-1.03 1.717h-22.326a1.59 1.59 0 0 1-1.717-1.202zm-33.488-21.181h27.134l-.387-1.277l-.621-2.022l-.909-2.896l-1.745-5.467l-1.662-5.254l-3.092-9.789a336 336 0 0 1-2.46-8.138l-.878-3.096l-.948-3.393l-.866-3.147h-.172a139 139 0 0 1-3.136 12.23l-1.16 3.723l-2.79 9l-1.414 4.585q-.383 1.242-.765 2.456l-.76 2.398l-.756 2.342l-.752 2.284l-.748 2.227q-.559 1.65-1.113 3.234m130.518 11.404h-33.831a24.1 24.1 0 0 0 3.263 9.461a17.67 17.67 0 0 0 7.813 6.44a32.6 32.6 0 0 0 13.653 2.676a62 62 0 0 0 11.077-1.216a40.8 40.8 0 0 0 9.523-2.482q.859-.685.86.858v16.315c.028.445-.061.889-.259 1.288c-.196.312-.46.576-.772.773a43.7 43.7 0 0 1-10.64 3.17a75.5 75.5 0 0 1-15.113 1.287q-11.814 0-19.917-3.545l-.52-.233a36.4 36.4 0 0 1-13.394-10.132a39.7 39.7 0 0 1-7.385-13.996A55.1 55.1 0 0 1 142 134.678a54.1 54.1 0 0 1 2.662-16.916a44.2 44.2 0 0 1 7.985-14.597a38.4 38.4 0 0 1 12.88-10.133c5.037-2.46 10.991-3.343 17.86-3.343a38.8 38.8 0 0 1 16.573 3.263a29.2 29.2 0 0 1 11.248 8.495a39 39 0 0 1 6.354 12.107a43.2 43.2 0 0 1 2.061 13.052q0 3.78-.257 6.87l-.153 1.764l-.16 1.674l-.095.848l-.022.179a1.556 1.556 0 0 1-1.545 1.374l-.471.01l-.587.03l-.457.033l-1.068.091l-.938.093q-.383.04-.795.075l-.851.067l-.909.06l-.965.05l-1.022.043l-.533.018l-1.107.03c-1.095.027-2.217-.041-3.368-.125l-1.746-.128a40 40 0 0 0-2.7-.106m-33.831-15.645h23.386l1.992-.013l1.354-.019l.877-.02l.984-.034a6 6 0 0 0 2.49-.825v-1.03a13.7 13.7 0 0 0-.686-3.95a14.03 14.03 0 0 0-13.91-9.79a14.92 14.92 0 0 0-14.169 8.072a24.8 24.8 0 0 0-2.318 7.61" /></svg>
                                <p className='ms-4 mb-0'>Logo</p>
                            </h1>

                            {/* Collapsed button behind the logo */}

                        </div><div style={{ flex: 1, marginBottom: '32px' }}>
                            <Menu menuItemStyles={menuItemStyles}>
                                <MenuItem component={<Link to="/" />} icon={<FaHome />} >
                                    Home</MenuItem>
                                <MenuItem component={<Link to="/ai-markter" />} icon={<FaStore />} >
                                    Ai-Markter
                                </MenuItem>
                                <MenuItem component={<Link to="/automation" />} icon={<FaMagic />} >
                                    Automation
                                </MenuItem>
                                <MenuItem component={<Link to="/GenrateAiImage" />} icon={<FaMagic />} >
                                    Genrate Ai Image
                                </MenuItem>
                                <MenuItem component={<Link to="/GenrateAitext" />} icon={<FaMagic />} >
                                    Genrate Ai Text
                                </MenuItem>

                            </Menu>
                        </div>
                    </div>
                </Sidebar >
            </div >
        </>
    )
}

