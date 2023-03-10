import React, { useState } from 'react'
import FormInput from './components/FormInput'
import "./app.css"
const App = () => {
  //for not creating usestate for multiple input field we can pass input object field inside use state.
  const [values, setValues] = useState({
    username:"",
    email:"",
    birthday:"",
    password:"",
    confirmPassword:""
  });


  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'User name',
      errorMessage:"Username should be 3-16 charchaters and should'nt include any special character",
      label: 'Username',
      pattern:"^[A-Za-z0-9]{3,16}$",
      required:true,
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage:"It should be a valid email address",
      label: 'Email',
      required:true,
    },
    {
      id: 3,
      name: 'birthday',
      type: 'date',
      placeholder: 'Birthday',
      errorMessage:"",
      label: 'Birthday'
    },
    {
      id: 4,
      name: 'password',
      type: 'text',
      placeholder: 'Password',
      errorMessage:"Password should be 8-20 characters and include at least 1 letter , 1 number , 1 special characters",
      label: 'Password',
      // pattern:'^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#%^&*])[a-zA-Z0-9!@#$%^&*],{8,20}$',
      pattern:`^[A-Za-z]\w{7,14}$`,
      required:true,
    },
    {
      id: 5,
      name: 'confirmPassword',
      type: 'text',
      placeholder: 'Confirm Password',
      errorMessage:"Passwords don't match!",
      label: 'Confirm Password',
      pattern:values.password,
      required:true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    //alert(JSON.stringify(values));
    
  };

  const onChange = (e) => {
    setValues({...values , [e.target.name] : e.target.value});
  }
 
  console.log(values);
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        {/* //insted of using multiple inputbox we can use array */}
        <h1>Form</h1>
        {
          inputs.map((input) => (
            
            <FormInput 
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
            />
          ))
        }
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App