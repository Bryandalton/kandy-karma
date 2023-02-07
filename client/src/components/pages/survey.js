import React from "react";
import fruityCandy from "../../images/fruitycandy.jpg";
import chocolateCandy from "../../images/chocolatecandy.jpg";
import sourCandy from "../../images/sourcandy.jpg";
import Dropdown from "react-bootstrap/Dropdown";
export default function Survey() {
  return (
    <div className="container">
      <div className="col-lg">
        <div className="card candy-cards" style={{ width: 18 + "rem" }}>
          <img className="card-img-top" src={fruityCandy} />
          <div className="card-body candy-card-body">
            <h5 className="card-title candy-card-title">Candy Survey</h5>
            <p className="card-text">
              Rate our candies on Texture, Look, Smell, Taste, and Overall
              quality! On a scale of 1-5, where 5 is the highest option.
            </p>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control candyName"
                  placeholder="Enter Candy Name *"
                  value=""
                />
              </div>
            </form>
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Candy Type
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Fruity Candy</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Sour Candy</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Chocolate Candy</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <ul className="list-group list-group-flush candy-list-group">
              <li className="list-group-item">
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Texture
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">4</Dropdown.Item>
                    <Dropdown.Item href="#/action-5">5</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li className="list-group-item">
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Look
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">4</Dropdown.Item>
                    <Dropdown.Item href="#/action-5">5</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li className="list-group-item">
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Smell
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">4</Dropdown.Item>
                    <Dropdown.Item href="#/action-5">5</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li className="list-group-item">
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Taste
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">4</Dropdown.Item>
                    <Dropdown.Item href="#/action-5">5</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li className="list-group-item">
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Overall
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">4</Dropdown.Item>
                    <Dropdown.Item href="#/action-5">5</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </ul>
            {/* <a href="#" className="btn btn-primary candy-btn">
                Review Me!
              </a> */}
          </div>
        </div>
      </div>
      {/* <div className="col-sm">
          <div className="card candy-cards" style={{ width: 18 + "rem" }}>
            <img className="card-img-top" src={chocolateCandy} />
            <div className="card-body candy-card-body">
              <h5 className="card-title candy-card-title">Chocolate Candy</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <ul className="list-group list-group-flush candy-list-group">
                <li className="list-group-item">Chocolate Candy Option 1</li>
                <li className="list-group-item">Chocolate Candy Option 2</li>
                <li className="list-group-item">Chocolate Candy Option 3</li>
              </ul>
              <a href="#" className="btn btn-primary candy-btn">
                Review Me!
              </a>
            </div>
          </div>
        </div> */}
      {/* <div className="col-sm">
          <div className="card candy-cards" style={{ width: 18 + "rem" }}>
            <img className="card-img-top" src={sourCandy} />
            <div className="card-body candy-card-body">
              <h5 className="card-title candy-card-title">Sour Candy</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <ul className="list-group list-group-flush candy-list-group">
                <li className="list-group-item">Sour Candy Option 1</li>
                <li className="list-group-item">Sour Candy Option 2</li>
                <li className="list-group-item">Sour Candy Option 3</li>
              </ul>
              <a href="#" className="btn btn-primary candy-btn">
                Review Me!
              </a>
            </div>
          </div>
        </div> */}
    </div>
  );
}
