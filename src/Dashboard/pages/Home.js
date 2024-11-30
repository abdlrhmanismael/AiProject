import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";

export default function Home() {
    return (
        <>
            <div className="wrapper">
                <Sidebar />
                <div className="content">
                    <Navbar />
                    <Outlet />
                </div>
            </div>
        </>
    )
}