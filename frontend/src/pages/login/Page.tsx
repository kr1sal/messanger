import './Page.css';

function LoginPage() {
    return <div className="content">
        <div className="login_auth">
            <h1 className="login__header">Auth</h1>
            <div className="input-field">
                <label htmlFor="">login</label>
                <input name="" id="" />
                <p></p>
            </div>
            <div className="input-field">
                <label htmlFor="">password</label>
                <input type="password" name="" id="" />
                <p></p>
            </div>
            <a href="#regist">Regist</a>
            <input type="submit" value="" />
        </div>
        <div className="login_auth">
            <h1 className="login__header">Register</h1>
            <div className="input-field">
                <label htmlFor="">login</label>
                <input name="" id="" />
                <p></p>
            </div>
            <div className="input-field">
                <label htmlFor="">password</label>
                <input type="password" name="" id="" />
                <p></p>
            </div>
            <div className="input-field">
                <label htmlFor="">password_confirm</label>
                <input type="password" name="" id="" />
                <p></p>
            </div>
            <a href="#auth">Login</a>
            <input type="submit" value="" />
        </div>
    </div>
}

export default LoginPage;