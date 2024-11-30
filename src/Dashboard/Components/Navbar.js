import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useSidebar } from "../Context/SidebarContext";

export default function Navbar() {
    const {
        collapsed,
        handleToggleSidebarSmall,
        handleToggleSidebar,
    } = useSidebar(); // Use the context to get state and setters

    return (<>
        <nav className="mb-2">
            <div className="d-flex">
                <div className="d-md-none" onClick={handleToggleSidebarSmall}><FontAwesomeIcon icon={faBars} className="text-white" size="2x" /></div>
                <div className="d-none d-md-block" onClick={handleToggleSidebar}><FontAwesomeIcon icon={faBars} className="text-white" size="2x" /></div>

            </div>
        </nav>
    </>)
}