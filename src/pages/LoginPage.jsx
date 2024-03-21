import React,{useState} from 'react'
import '../styles/Login.scss'
import { setLogin } from '../redux/state'
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

// import {
//   MDBBtn,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBInput,
//   MDBCheckbox,
//   MDBIcon
// }
// from 'mdb-react-ui-kit';
function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch ("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      })

      /* Get data after fetching */
      const loggedIn = await response.json()

      if (loggedIn) {
        alert('Login successfull')
        dispatch (
          setLogin({
            user: loggedIn.user,
            token: loggedIn.token
          })
        )
        navigate("/")
      }

    } catch (err) {
      alert('login failed')
      console.log("Login failed", err.message)
    }
  }
  return (

    // <MDBContainer fluid className='p-4'>

    //   <MDBRow>

    //     <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

    //       <h1 className="my-5 display-3 fw-bold ls-tight px-3">
    //         The best offer <br />
    //         <span className="text-primary">for your business</span>
    //       </h1>

    //       <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //         Eveniet, itaque accusantium odio, soluta, corrupti aliquam
    //         quibusdam tempora at cupiditate quis eum maiores libero
    //         veritatis? Dicta facilis sint aliquid ipsum atque?
    //       </p>

    //     </MDBCol>

    //     <MDBCol md='6'>

    //       <MDBCard className='my-5'>
    //         <MDBCardBody onSubmit={handleSubmit} className='p-5'>

    //           <MDBRow>
                

                
    //           </MDBRow>

    //           <MDBInput value={email}onChange={(e) => setEmail(e.target.value)}
    //         required  wrapperClass='mb-4' label='Email' id='form1' type='email'/>

    //           <MDBInput value={password} onChange={(e) => setPassword(e.target.value)}
    //          required wrapperClass='mb-4' label='Password' id='form1' type='password'/>

    //           <div className='d-flex justify-content-center mb-4'>
    //             <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
    //           </div>

    //           <MDBBtn type="submit" className='w-100 mb-4' size='md'>sign up</MDBBtn>

    //           <div className="text-center">

    //             <p>or sign up with:</p>

    //             <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
    //               <MDBIcon fab icon='facebook-f' size="sm"/>
    //             </MDBBtn>

    //             <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
    //               <MDBIcon fab icon='twitter' size="sm"/>
    //             </MDBBtn>

    //             <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
    //               <MDBIcon fab icon='google' size="sm"/>
    //             </MDBBtn>

    //             <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
    //               <MDBIcon fab icon='github' size="sm"/>
    //             </MDBBtn>

    //           </div>

    //         </MDBCardBody>
    //       </MDBCard>

    //     </MDBCol>

    //   </MDBRow>

    // </MDBContainer>



    <div className="login">
      <div className="login_content">
        <img style={{width:'100px',marginLeft:"200px"}} src="https://cdn-icons-png.flaticon.com/512/5580/5580993.png" alt="" />
        <form className="login_content_form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button style={{backgroundColor:"blue"}}  type="submit">LOG IN</button>
        </form>
        <a href="/register">Don't have an account? Sign In Here</a>
      </div>
    </div>
  )
}

export default LoginPage