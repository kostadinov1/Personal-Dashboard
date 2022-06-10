

export default function Login() {
    return (
        <div id="login-page">
        <div className="container">
          <form className="form-login" >
            <h2 className="form-login-heading">sign in now</h2>
            <div className="login-wrap">
              <input type="text" className="form-control" placeholder="User ID" autofocus/>
              <br/>
              <input type="password" className="form-control" placeholder="Password"/>
              <label className="checkbox">
                <input type="checkbox" value="remember-me" /><span> Remember Me</span> 
                <span className="pull-right">
                <a data-toggle="modal" href="login.html#myModal"> Forgot Password?</a>
                </span>
                </label>
              <button className="btn btn-theme btn-block" href="index.html" type="submit"><i className="fa fa-lock"></i> SIGN IN</button>
              <hr/>

            </div>
            <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="myModal" className="modal fade">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 className="modal-title">Forgot Password ?</h4>
                  </div>
                  <div className="modal-body">
                    <p>Enter your e-mail address below to reset your password.</p>
                    <input type="text" name="email" placeholder="Email" autocomplete="off" className="form-control placeholder-no-fix"/>
                  </div>
                  <div className="modal-footer">
                    <button data-dismiss="modal" className="btn btn-default" type="button">Cancel</button>
                    <button className="btn btn-theme" type="button">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

    )
}