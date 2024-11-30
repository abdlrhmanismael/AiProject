import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { faCheck, faCirclePlus, faMinus, faPause, faPlus, faPowerOff, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
export default function Automation() {

    const ShowMPhase = [{
        title: 'Start',
        icon: faPowerOff
    }, {
        title: 'Pause',
        icon: faPause
    }, {
        title: 'Increase',
        icon: faPlus
    }, {
        title: 'Decrease',
        icon: faMinus
    },].map((markter, key) => (
        <div className="col-12 col-md-6 col-lg-4" key={key}>
            <div key={key} className="card text-white border-dark p-3 " style={{ background: '#060623' }}>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <FontAwesomeIcon icon={faCirclePlay} />
                        <p className="mb-0 ms-2">{markter.title}</p>
                    </div>
                    <div>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#${markter.title}modal`}>
                            <FontAwesomeIcon icon={markter.icon} size="lg" />
                        </button>

                    </div>
                </div>
                <div className="mt-3 d-flex align-items-center justify-content-between">
                    <h5 className="mb-0">
                        Action Trigger
                    </h5>
                    <p className="mb-0 me-2">0</p>
                </div>
            </div>
        </div >
    ));
    const [preview, setPreview] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setPreview(event.target.result);
            };
            reader.readAsDataURL(file);
        } else {
            alert("Please upload a valid image file.");
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setPreview(event.target.result);
            };
            reader.readAsDataURL(file);
        } else {
            alert("Please drop a valid image file.");
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };
    useEffect(() => {
        const modal = document.getElementById("Startmodal");
        const resetModal = () => {
            setPreview(null);
            const fileInput = document.getElementById("fileInput");
            if (fileInput) {
                fileInput.value = null;
            }
        };

        if (modal) {
            modal.addEventListener("hidden.bs.modal", resetModal);
        }

        return () => {
            if (modal) {
                modal.removeEventListener("hidden.bs.modal", resetModal);
            }
        };
    }, []);

    return (
        <>
            <div className="row">
                {ShowMPhase}
            </div>
            {/* start modal */}
            <div className="modal fade" id="Startmodal" tabIndex="-1" aria-labelledby="Startmodallabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Start Ad</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div
                                className="border border-primary p-4 text-center"
                                onDrop={handleDrop}
                                onDragOver={handleDragOver}
                                style={{
                                    borderRadius: "10px",
                                    cursor: "pointer",
                                    backgroundColor: "#f9f9f9",
                                }}
                            >
                                {preview ? (
                                    <div>
                                        <img
                                            src={preview}
                                            alt="Uploaded Preview"
                                            className="img-fluid"
                                            style={{ maxWidth: "100%", maxHeight: "300px" }}
                                        />
                                    </div>
                                ) : (
                                    <p>Drag and drop an image here, or click to upload</p>
                                )}
                                <input
                                    type="file"
                                    className="form-control mt-2"
                                    style={{ display: "none" }}
                                    id="fileInput"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                />
                                <label htmlFor="fileInput" className="btn btn-primary mt-2">
                                    Choose File
                                </label>
                            </div>
                            <div className="mt-3">
                                <label htmlFor="budget" className="">
                                    Budget
                                </label>
                                <input
                                    type="number"
                                    className="form-control mt-2"
                                    id="budget"
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Start</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* pause modal */}
            <div className="modal fade" id="Pausemodal" tabIndex="-1" aria-labelledby="Pausemodallabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="PausemodalLABEL">Pause Ad</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <div className="mt-3">
                                <label htmlFor="budget" className="mb-3">
                                    Ads
                                </label>
                                <select className="form-select form-select-lg mb-3" aria-label="Large select example">
                                    <option selected>Open this select Ad</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Pause</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Increase modal */}
            <div className="modal fade" id="Increasemodal" tabIndex="-1" aria-labelledby="Increasemodallabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="IncreasemodalLABEL">Iecrease Ad</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <div className="mt-3">
                                <label htmlFor="budget" className="mb-3">
                                    Ads
                                </label>
                                <select className="form-select form-select-lg mb-3" aria-label="Large select example">
                                    <option selected>Open this select Ad</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="mt-3">
                                <label htmlFor="cost" className="form-label" >
                                    Cost
                                </label>
                                <input id="cost" type="number" className="form-control mt-2"
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Decrease modal */}
            <div className="modal fade" id="Decreasemodal" tabIndex="-1" aria-labelledby="Decreasemodallabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="DecreasemodalLABEL">Decrease Ad</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <div className="mt-3">
                                <label htmlFor="budget" className="mb-3">
                                    Ads
                                </label>
                                <select className="form-select form-select-lg mb-3" aria-label="Large select example">
                                    <option selected>Open this select Ad</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="mt-3">
                                <label htmlFor="cost" className="form-label" >
                                    Cost
                                </label>
                                <input id="cost" type="number" className="form-control mt-2"
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}