import { useEffect, useState } from "react";

export default function AiTextGenration() {



    const ShowAiText = [1, 2, 3].map((markter, key) => (
        <div className="col-12 col-md-6 col-lg-4">

            <div key={key} className="card text-white border-dark p-3 text-center d-flex align-items-center" style={{ background: '#060623' }}>
                <h6>Ai text here.</h6>
            </div>
        </div>
    ));
    return (
        <>
            <div>
                <button type="button" className="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target={`#textGenrationmodal`}>
                    Genrate With Ai
                </button>
            </div>
            <div className='row'>
                {ShowAiText}
            </div>
            <div className="modal fade" id="textGenrationmodal" tabIndex="-1" aria-labelledby="textGenrationmodallabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="PausemodalLABEL">Genarete Text</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <div className="mt-3">
                                <label htmlFor="text" className="mb-3">
                                    Text
                                </label>
                                <textarea class="form-control" id="text" rows="5"></textarea>
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