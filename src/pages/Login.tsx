import { useForm } from 'react-hook-form';
import { LoginFormType } from '../types';
import './login.css';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormType>();

  const onSubmit = (data: LoginFormType) => {
    console.log(data);
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
            {errors?.email?.type === 'required' && <p>{errors.email.message}</p>}
            {errors?.email?.type === 'pattern' && <p>{errors.email.message}</p>}
          </div>

          <div>
            <input
              type="text"
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
            {errors?.password?.type === 'required' && <p>{errors.password.message}</p>}
            {errors?.password?.type === 'minLength' && <p>{errors.password.message}</p>}
          </div>

          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
