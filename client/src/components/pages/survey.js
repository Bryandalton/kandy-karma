import React from "react";
import fruityCandy from '../../images/fruitycandy.jpg';
import chocolateCandy from '../../images/chocolatecandy.jpg';
import sourCandy from '../../images/sourcandy.jpg';
export default function Survey() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <div className="card candy-cards" style={{ width: 18 + 'rem' }}>
            <img
              className="card-img-top"
              src={fruityCandy}
            />
            <div className="card-body candy-card-body">
              <h5 className="card-title candy-card-title">Fruity Candy</h5>
              <p className="card-text">
                Answer questions about our newest Fruity Candies!
              </p>
              <ul className="list-group list-group-flush candy-list-group">
                <li className="list-group-item">Fruity Candy Option 1</li>
                <li className="list-group-item">Fruity Candy Option 2</li>
                <li className="list-group-item">Fruity Candy Option 3</li>
              </ul>
              <a href="#" className="btn btn-primary candy-btn">
                Review Me!
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card candy-cards" style={{width: 18 + 'rem'}}>
            <img
              className="card-img-top"
              src={chocolateCandy}
            />
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
        </div>
        <div className="col-sm">
          <div className="card candy-cards" style={{width: 18 + 'rem'}}>
            <img
              className="card-img-top"
              src={sourCandy}
            />
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
        </div>
      </div>
    </div>
  );
}
