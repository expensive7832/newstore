import React from 'react'

function Login() {

  function handleSubmit(e){
    e.preventDefault()

    let form = new FormData(e.currentTarget)

    alert(form.get("email"))
    alert(form.get("password"))

  }

  return (
    <div className="login container p-5">
     <form onSubmit={(e) => handleSubmit(e)}  className="w-50 m-auto">

     <div className='mb-3'>
        <label htmlFor="" className="form-label">Email</label>
        <input name="email" type="text" className="form-control" />
      </div>

      <div className='mb-3'>
        <label htmlFor="" className="form-label">Password</label>
        <input name="password" type="password" className="form-control" />
      </div>

      <button className="btn btn-dark">Login</button>
     </form>
    </div>
  )
}

export default Login