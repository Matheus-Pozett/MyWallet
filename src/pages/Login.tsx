import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LoginFormType } from '../types';
import './login.css';
import { getEmail } from '../redux/actions';

function Login() {
  const { register, handleSubmit,
    formState: { errors, isValid } } = useForm<LoginFormType>({ mode: 'onChange' });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data: LoginFormType) => {
    dispatch(getEmail(data.email));
    navigate('/carteira');
  };

  return (
    <div className="page-login-container">
      <div className="page-login">
        <img
          src="/mywallet.svg"
          alt="logo"
        />

        <form className="form-login" onSubmit={ handleSubmit(onSubmit) }>
          <div>
            <input
              type="text"
              data-testid="email-input"
              placeholder="E-mail"
              className="input-form"
              { ...register('email', {
                required: 'Email Obrigatório',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Formato de e-mail inválido',
                },
              }) }
            />
            {errors?.email && <p>{errors.email.message}</p>}
          </div>

          <div>
            <input
              type="password"
              data-testid="password-input"
              placeholder="Senha"
              className="input-form"
              { ...register('password', {
                required: 'Senha Obrigatória',
                minLength: {
                  value: 6,
                  message: 'A senha precisa ter no mínimo 6 caracteres',
                } }) }
            />
            {errors?.password && <p>{errors.password.message}</p>}
          </div>

          <button type="submit" disabled={ !isValid }>Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
