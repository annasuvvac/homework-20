import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const portfolio = () => {
    return (
        <div className="portfolioApp">
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h3>
                            Portfolio
                    </h3>
                    </div>
                    

                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-1">
                            </div>

                            <div className="col-md-3">
                                <a href="https://ana199816.github.io/homework-06/">
                                    <img src="assets/img/weather1.png"
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">Weather Dashboard</p>
                                <p id="repo"><a href="https://github.com/Ana199816/homework-06">https://github.com/Ana199816/homework-06</a></p>
                            </div>
                            <div className="col-md-1"></div>

                            <div className="col-md-3">
                                <a href="https://ana199816.github.io/homework-05/">
                                    <img src="assets/img/work.day.png"
                                        className="card-img-top" alt="img-two" />
                                </a>
                                <p className="card-text">Day Planner</p>
                                <p id="repo"><a href="https://github.com/Ana199816/homework-05"
                                >https://github.com/Ana199816/homework-05</a></p>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className="row">
                            <div className="col-md-1">

                            </div>
                            <div className="col-md-3">
                                <a href="https://ana199816.github.io/homework-04/">
                                    <img src="img/quiz3.png"
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">JS Quiz</p>
                                <p id="repo"><a href="https://github.com/Ana199816/homework-04"
                                >https://github.com/Ana199816/homework-04</a></p>
                            </div>
                            <div className="col-md-1">

                            </div>
                            <div className="col-md-3">
                                <a href="https://github.com/Argent-T/Drinky-Bird">
                                    <img src="img/screen1.jpg"
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">Project-1</p>
                                <p id="repo"><a href="https://github.com/Argent-T/Drinky-Bird"
                                >https://github.com/Argent-T/Drinky-Bird</a></p>
                                <div className="col-md-1"></div>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-3">
                                <a href="https://ana199816.github.io/Homework-03/">
                                    <img src="assets/img/screenshot pasw.PNG"
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">Try: Password Generator</p>
                                <p id="repo"><a href="https://github.com/Ana199816/Homework-03"
                                >https://github.com/Ana199816/Homework-03</a></p>

                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-3">
                                <a href="https://asproject2.herokuapp.com/">
                                    <img src="assets/img/let's.travel.png"
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">Project 2: Let's Travel</p>
                                <p id="repo"><a href="https://github.com/Ana199816/Project-2"
                                >https://github.com/Ana199816/Project-2</a></p>

                            </div>
                        </div>
                        <br></br>
                        <div className="gitProfile">
                            <p>GitHub Profile: <a href="https://github.com/Ana199816">
                            https://github.com/Ana199816</a> </p>
                            <p>Linkedin Profile: <a href="https://www.linkedin.com/in/ana-suvac-192057195/"
                            >https://www.linkedin.com/in/ana-suvac-192057195/</a></p>
                            <p>Email Address: anasuvac@yahoo.com</p>
                            <p>Phone Number:(850)-890-5740</p>
                            <a href="https://github.com/Ana199816/homework-16/blob/master/assets/resume/resume.pdf"
                            > Resume</a>

                        </div>
                    </div>

                </div>






            </div>
        </div>
    )
}
export default portfolio