import { useEffect, useState } from "react";

export default function AiImageGenration() {
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
        const modal = document.getElementById("GenrateAiImage");
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
    const ShowImages = [1, 2, 3].map((markter, key) => (
        <div className="col-12 col-md6 col-lg-4">
            <div style={{ height: '400px' }}>
                <img src={require('../images/0_orGLeA9Vag5S256I.jpg')} alt="logo" style={{ objectFit: 'cover' }} className="w-100 h-100"></img>
            </div>
        </div>
    ));
    return (
        <>
            <div>
                <button type="button" className="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target={`#imageGenrationmodal`}>
                    Genrate With Ai
                </button>
            </div>
            <div className='row'>
                {ShowImages}
            </div>
            <div className="modal fade" id="imageGenrationmodal" tabIndex="-1" aria-labelledby="imageGenrationmodalabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Genrate Image</h1>
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

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Genrate</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}