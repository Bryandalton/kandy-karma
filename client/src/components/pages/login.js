import React,{useState} from "react";
import { useMutation } from '@apollo/client';
import {useNavigate} from "react-router-dom";
//import the tagged gql template
import { LOGIN, ADD_USER } from "../../utils/graphql/mutation";
import Auth from "../../utils/auth";

export default function LoginPage() {
  const [formState, setFormState] = useState({username: "", password: "", email: ""});
  const [addUserFormState, setAddUserFormState] = useState({username: "", password: "", email: ""})
  const [ login, {error}] = useMutation(LOGIN);
  const [addUser] = useMutation(ADD_USER);
  const navigate = useNavigate()

  if(error) {
    console.log((error));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  }

  function handleAddUserChange(e) {
    const {name, value} = e.target;
    setAddUserFormState({
      ...addUserFormState,
      [name]: value,
    })
  }

  async function handleAddUser(e) {
    e.preventDefault();
    try{
      const {data} = await addUser({
        variables: {...addUserFormState},
      });

      Auth.login(data.login.token)
    }
    catch(e){
      console.error(e)
    }
    // clear form values
    setAddUserFormState({
      username: '',
      password: '',
      email: ''
    });
  }

  async function handleLogin(e) {
    e.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
    navigate('/survey')

    // clear form values
    setFormState({
      username: '',
      password: '',
    });
  }

  return (
    <div className="container login-container">
      <div className="col-md-6 login-form-1">
        <h3>Login</h3>
        <form>
          <div className="form-group">
            <input
            onChange={handleChange}
              type="text"
              className="form-control"
              placeholder="Your username here"
              value={formState.username}
              name="username"
            />
          </div>
          <div className="form-group">
            <input
            onChange={handleChange}
              type="password"
              className="form-control"
              placeholder="Your Password *"
              value={formState.password}
              name="password"
            />
          </div>
          <div className="form-group">
            <input onClick={handleLogin} type="submit" className="btnSubmit" value="Login" />
          </div>
        </form>
      </div>
      <div className="col-md-6 login-form-2">
        <h3>Sign Up</h3>
        <form>
          <div className="form-group">
            <input
            onChange={handleAddUserChange}
              type="text"
              className="form-control"
              placeholder="Your Username *"
              value={addUserFormState.username}
              name= "username"
            />
          </div>
          <div className="form-group">
            <input
            onChange={handleAddUserChange}
              type="text"
              className="form-control"
              placeholder="Your Email *"
              value={addUserFormState.email}
              name="email"
            />
          </div>
          <div className="form-group">
            <input
            onChange={handleAddUserChange}
              type="password"
              className="form-control"
              placeholder="Your Password *"
              value={addUserFormState.password}
              name="password"
            />
          </div>
          <div className="form-group">
            <input onClick={handleAddUser} type="submit" className="btnSubmit" value="Sign Up" />
          </div>
        </form>
      </div>
    </div>
  );
}
