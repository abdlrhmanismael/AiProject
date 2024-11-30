import { faFacebook, faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCheck, faMoneyBillTrendUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Analysis() {
    const ShowEmptyMarkter = [1, 2, 3].map((markter, key) => (
        <div className="col-12 col-md-6 col-lg-4">

            <div key={key} className="card text-white border-dark p-3 text-center d-flex align-items-center" style={{ background: '#060623' }}>
                <h6>Reauthenticate Facebook in the "Data
                    sources" tab.</h6>
            </div>
        </div>
    ));
    const ShowMarkter = [1, 2, 3].map((markter, key) => (
        <div className="col-12 col-md-6 col-lg-4">

            <div key={key} className="card text-white border-dark p-3 " style={{ background: '#060623' }}>
                <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faFacebook} className="me-2" />
                    <FontAwesomeIcon icon={faTwitter} className="mx-2" />
                    <FontAwesomeIcon icon={faGoogle} className="mx-2" />
                    <p className="mx-2 mb-0 ">Total Ad spend</p>
                </div>
                <div className="mt-3 d-flex align-items-center justify-content-between">
                    <h5>
                        $8,345
                    </h5>
                    <FontAwesomeIcon icon={faMoneyBillTrendUp} className="text-success" />
                </div>
            </div>
        </div>
    ));
    const ShowBigEmptyMarkter = [1, 2].map((markter, key) => (
        <div className="col-md-6">
            <div key={key} className="card text-white border-dark p-3 text-center d-flex align-items-center justify-content-center" style={{ background: '#060623', height: '350px' }}>
                <div>
                    <h4>Reauthenticate Facebook in the "Data
                        sources" tab.</h4>
                </div>
            </div>
        </div>
    ));

    return (
        <>
            <div className="row">
                {ShowEmptyMarkter}
                {ShowMarkter}
                {ShowBigEmptyMarkter}
            </div>
        </>
    )
}