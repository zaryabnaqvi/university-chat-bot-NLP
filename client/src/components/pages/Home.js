import React from "react";
import Slider from "../inc/Slider";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <Slider />
      <section className="section">
        <div className="container">
          <div className="row ">
            <div className="col-md-12 ">
              <h3 className="main-heading">Masters Admissions</h3>
              <div className="underline"></div>
            </div>
          </div>
        </div>
        <hr/>
        <div className="container">
          <div className="row ">
            <div className="col-md-12 text-center">
              <h2 className="second-heading">
                Important Instructions for Applicants of MS CSIT/IS/DS
                (FALL-2023)
              </h2>
              <div className="underlines mx-auto"></div>
            </div>
            <p>
              <span style={{ fontWeight: "bold", color: "red" }}>
                Important Note:
              </span>
              Guidelines for Fee payment and Courses Registration which includes
              portal login credentials UID / Password has been sent via email to
              all admitted candidates in MS CSIT/ IS / DS (E/W) for Fall 2023.
              All admitted candidates are advised to carefully follow the
              provided guidelines and register courses accordingly. Those
              admitted students who have not received the courses registration
              email are advised to immediately visit the Department of CS&IT
              during office hours.
            </p>
            <p>
              Students of Evening programmes may select maximum 2 courses while
              students of Weekend programme may select maximum of 4 courses in a
              semester. But this course limit does not include non credit
              courses.{" "}
            </p>
            <div>
              <div>
                <p>
                  <span style={{ fontWeight: "bold", fontStyle: "Arial" }}>
                    Registration Deadline Extended:{" "}
                  </span>
                  <span style={{ color: "red", backgroundColor: "yellow" }}>
                    27<sup>th</sup> October, 2023 ( with Rs.1,500/- late fees)
                  </span>
                </p>
              </div>
              <div>
                <p>
                  <span style={{ fontWeight: "bold", fontStyle: "Arial" }}>
                    Commencement Of Classes:{" "}
                  </span>
                  <span style={{ color: "blue" }}>
                    9<sup>th</sup> October, 2023
                  </span>
                </p>

                <div className="col-md-12 text-center">
                  <h4 className="second-heading">Note:</h4>
                  <p>
                    Candidates are advised to bring all original required
                    documents along with one complete photocopy set (attested)
                    in the interviews. Admission will not be granted if any of
                    the required documents will be missing at the time of the
                    interview.
                  </p>
                </div>
                <div className="container">
                  <div className="row ">
                    <div className="col-md-12 ">
                      <h5 className="third-heading">Required Documents</h5>
                      <p>
                        Candidates are required to bring all the following
                        Original Documents along with a set of attested
                        photocopies at the time of the interview:
                      </p>
                      <ol>
                        <li>S.S.C. Certificate</li>
                        <li>H.S.C. Certificate</li>
                        <li>Marks/Transcript Certificates of qualifying
                          examination i.e. undergraduate/postgraduate programs
                        </li>
                        <li> Degree / Provisional Certificate of qualifying
                          examination
                        </li>
                        <li>Computerised National Identity Card</li>
                        <li>Domicile</li>
                        <li>Registration Certificate of Pakistan Engineering
                          Council / Pakistan Council of Architects and Town
                          Planners (if applicable)
                        </li>
                        <li>Migration Certificate (in original) in case of a
                          candidate has a degree from a University other than
                          NED University
                        </li>
                        <li>No Objection Certificate (in original), from the
                          employer (if the candidate is employed)
                        </li>
                        <li>Two Latest Photographs 1” x 1”</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      </section>
    </div>
  );
}
