import React from "react";

export default function about() {
  return (
    <section className="h-100 gradient-form" style={{"background-color": "#eee;"}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 about">
              <div className="card rounded-3 text-black">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="p-md-5 mx-md-4">
                      <div className="text-center">
                        <h4 className="mt-1 mb-5 pb-1">Welcome to Kandy Karma!</h4>
                      </div>
                      <p>At Kandy Karma is is our goal to provide a product testing environment suitable for your company's needs!  Speak with one of our Product Testing Lead's to book a testing session for your candy product.</p>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-5 p-md-5 mx-md-4">
                      <h4 className="mb-4">Contact us</h4>
                      <ul>
                        <li>Phone: (526) 395-2762</li>
                        <li>Email: Info@KandyKarma.com</li>
                        <li>Open for Appointments Only:
                          {"\n"}
                            7412 Sleepy Hollow Ave.
                            Reynoldsburg, OH 43068</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
