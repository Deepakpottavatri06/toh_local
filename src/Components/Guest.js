import React from "react";
import { Link } from "react-router-dom";
export default function Guest(props) {
    props.setSignInButton(true);
    return (
        <div className="parenth">
        <div className="container d-flex justify-content-center mt-5 " >
            <div className="Guest container shadow-lg rounded-3 mt-5 w-75 rounded rounded-2 border border-light align-content-center" style={{backgdropFilter:'blur(10px)'}}>
                <div className="row">
                    <div className="col-sm-12 mt-4 text-center ">
                        <Link to="/guest/upload" type="button" className="btn btn-light b Guestbt">Upload Your Tire Image Here</Link>
                    </div>
                    <div className="col-sm-12 mt-4 text-center">
                        <Link to="/guest/checkdetails" type="button" className="btn btn-light b Guestbt" >Check Your Vehicle Details</Link>
                    </div>
                    <div className="col-sm-12 mt-4 mb-2 text-center">
                        <Link to="/"  className="btn btn-warning backb">Go Back</Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}