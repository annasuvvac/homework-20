import React from "react";
import "../../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function body(props) {
    return (
        <div className="aboutApp">

            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h3>
                            About Me
         </h3>
            </div>
            <div className="card-body">
                        <blockquote className="blockquote mb-0">
          <div className="row">
         <div className="col-md-3">
       <img id="pic" src="https://avatars0.githubusercontent.com/u/56319950?s=460&u=29ea5c9829ccb251f4c3e739338f1ba870b5ce7d&v=4" alt="profile pic" width="100%" height="auto%" />
      </div>

    <div className="col-md-8">

     <p>My name is Ana Suvac. I am an aspiring developer currently registered with UNC Charlotte Coding Bootcamp. I anticipate completing the program in April 2020.</p>
    
    <p>My background is the completion of university and high school. I have several years of experience in: Manager-
         Chisinau, Republic Of Moldova Oriflame / Jan 2018 to Jun 2018
         I was responsible for organizing customer networks, coordinating promotional companies, planning sales commissions and distributing salaries and
        Dispatcher-
         Chisinau, Republic Of Moldova General Inspectorate Of Border Police / Dec 2016 to Jan 2018
         as a dispatcher I had the following responsibilities: receiving all the calls during the service and redirecting them to the boss, checking all the reports and completing them and checking the suspicious persons in the database. </p>
        
    <p>My next work is hopefully a full stack developer. I hope to gain enough knowledge to work in this sphere and gain even more experience.</p>
<p>During my free time I like to take pictures and then edit them to give a professional look.</p>
 </div>
  </div>
   </blockquote>
   </div>
 </div>
            </div>

        </div>
            )
        }
export default body