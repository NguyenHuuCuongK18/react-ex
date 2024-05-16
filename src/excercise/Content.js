import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Content(props) {
    return (
        <div className="container" style={{marginBottom:"1000",}}>
            <h1 className="text-left bg-light p-5">Let's test the grid!</h1>
            <div className="mx-5 mt-4">
                <div className="row">
                    <div className="col p-3 border bg-light">
                        First col
                    </div>
                    <div className="col p-3 border bg-light">
                        Second col
                    </div>
                </div>

                <div className="row">
                    <div className="col-4 p-3 border bg-light">
                        col
                    </div>
                    <div className="col-4 p-3 border bg-light">
                        col
                    </div>
                    <div className="col-4 p-3 border bg-light">
                        col
                    </div>
                </div>

                <div className="row">
                    <div className="col-3 p-3 border bg-light">
                        col
                    </div>
                    <div className="col-3 p-3 border bg-light">
                        col
                    </div>
                    <div className="col-3 p-3 border bg-light">
                        col
                    </div>
                    <div className="col-3 p-3 border bg-light">
                        col
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;