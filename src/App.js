import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <div class="container">
            <form>

              <h3>Sign In</h3>

              <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" />
              </div>
              <br></br>

              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
              </div>
              <br></br>

              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="customCheck1" />
                  <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
              </div>
              <br></br>

              <button type="submit" className="btn btn-outline-primary .btn-block">Submit</button>
              <p className="forgot-password text-right">
                Forgot password?
              </p>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;