import { faGear, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AiMarkter() {
    const Lunched = () => toast.success("Lunched succefully!");

    const ShowMarkter = [1, 2, 3, 4, 5, 6].map((markter, key) => (
        <div key={key} className="card border-dark p-3">
            <div className="d-flex align-items-center">
                <div className="icons text-white rounded-3 d-flex justify-content-center align-items-center ">
                    <FontAwesomeIcon icon={faGear} /></div>
                <div className="card-body" >
                    <div >
                        <p className="text-white">New automation: scale winning ACQ ad sets</p>
                        <span className="badge-name text-white p-2 rounded-3">Abdulrahman ismael</span>
                    </div>
                </div>
                <div className="d-flex align-items-center flex-column flex-md-row">
                    <button className="btn btn-outline-primary btn-sm btn-see-details my-2" onClick={Lunched} >Lunch</button>
                    <button className="btn btn-outline-danger btn-sm btn-see-details"><FontAwesomeIcon icon={faTrash} /></button>
                </div>
            </div>
        </div>
    ));
    return (
        <>
            {ShowMarkter}
            <ToastContainer />
        </>
    )
}