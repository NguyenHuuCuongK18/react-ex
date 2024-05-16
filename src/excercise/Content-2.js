import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Content2(props) {
    return (
        <div>
            <div className="container text-center">
                <div className="title-background">
                    <h1>My First Bootstrap Page</h1>
                </div>

                <div className="row mt-4">
                    <div className="col icon-size">
                        <i className="fab fa-html5 icon-color-html"></i>
                        <p>HTML5</p>
                    </div>

                    <div className="col icon-size">
                        <i className="fab fa-css3-alt icon-color-css"></i>
                        <p>CSS3</p>
                    </div>

                    <div className="col icon-size">
                        <i className="fab fa-bootstrap icon-color-bootstrap"></i>
                        <p>Bootstrap</p>
                    </div>
                </div>
            </div>


            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.9.9/dist/umd/popper.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        </div>
    );
}

export default Content2;