import React from "react";

export default function about() {
  return (
    <section
    className=""
      style={{ "background-color": "#eee;" }}
    >
        <div className="about-container justify-content-center align-items-center">
          <div className="col-10">
            <div className="card rounded-3 text-black">
                  <div className="p-5 mx-4">
                    <div className="text-center">
                      <h4 className="mt-1 mb-5 pb-1">
                        Welcome to Kandy Karma!
                      </h4>
                    </div>
                    <p>
                      At Kandy Karma it is our goal to provide a product testing
                      environment suitable for your company's needs! Speak with
                      one of our Product Testing Lead's to book a testing
                      session for your candy product.
                    </p>
                  </div>
                </div>
                <div className=" card rounded-3 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-5 p-5 mx-4">
                    <h4 className="mb-4">Contact us</h4>
                    <ul>
                      <li>Phone: (526) 395-2762</li>
                      <li>Email: Info@KandyKarma.com</li>
                      <li>
                        Open for Appointments Only:
                        {"\n"}
                        7412 Sleepy Hollow Ave. Reynoldsburg, OH 43068
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
    </section>
  );
}
