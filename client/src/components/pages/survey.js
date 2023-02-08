import React, { useState } from "react";
import fruityCandy from "../../images/fruitycandy.jpg";
import chocolateCandy from "../../images/chocolatecandy.jpg";
import sourCandy from "../../images/sourcandy.jpg";
import Dropdown from "react-bootstrap/Dropdown";
import { ADD_SURVEY } from "../../utils/graphql/mutation";
import { useMutation } from "@apollo/client";

//look for a way to do conditional login so survey is only accessable when logged in
//also find out why login isn't workingcd

export default function Survey() {
  const [addSurvey] = useMutation(ADD_SURVEY);
  const [surveyState, setSurveyState] = useState({
    candy_name: "",
    username: "",
    type: "",
    texture: 0,
    smell: 0,
    look: 0,
    overall: 0,
    taste: 0,
    surveyId: 0,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setSurveyState({
      ...surveyState,
      [name]: value,
    });
  }

  async function handelAddSurvey(e)  {
    e.preventdefault();
    try{
      const {data} = await addSurvey({
        variables: {...surveyState}
      })
    }
    catch(e){
      console.error(e)
    }
    setSurveyState({
      candy_name: "",
      username: "",
      type: "",
      texture: 0,
      smell: 0,
      look: 0,
      overall: 0,
      taste: 0,
      surveyId: 0,
    })
  }

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
                onChange={handleChange}
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
    </div>
  );
}
