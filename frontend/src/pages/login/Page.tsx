import { useRegisterMutation } from '../../graphql/generated/output';
import useAuthStore from '../../store/auth.store';
import InputField from './InputField';
import './Page.css';
import SubmitButton from './SubmitButton';

function LoginPage() {
    const { username, email, password, setUsername, setEmail, setPassword } = useAuthStore((state) => state);

    const [registerMutation] = useRegisterMutation();

    const register = async () => {
        await registerMutation({
            variables: { data: { username, email, password } }
        });
    }

    return <div className="content">
        <div className="auth_register">
            <h1 className="login__header">Auth</h1>
            <InputField label={'username'} defaultValue={username} onChange={setUsername} ></InputField>
            <InputField label={'email'} defaultValue={email} onChange={setEmail} ></InputField>
            <InputField label={'password'} defaultValue={password} onChange={setPassword} ></InputField>
            <a href="#regist">Regist</a>
            <SubmitButton text='submit' onSubmit={register}></SubmitButton>
        </div>
        <div className="auth_login">
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