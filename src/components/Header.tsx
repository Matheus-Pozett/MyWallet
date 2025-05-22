import { useSelector } from 'react-redux';
import { TGlobalState } from '../types';
import './header.css';

function Header() {
  const { email } = useSelector((globalState: TGlobalState) => globalState.user);
  const expenses = useSelector((state: TGlobalState) => state.wallet.expenses);

  const total = expenses.reduce((acc, expense) => {
    const { value, currency, exchangeRates } = expense;
    const valorConvertido = Number(value) * Number(exchangeRates[currency].ask);
    return acc + valorConvertido;
  }, 0);

  return (
    <header className="header-container">
      <img
        src="/mywallet.svg"
        alt="logo"
      />

      <div className="total-despesas-box">
        <img src="/Moedas.svg" alt="logo moedas" />
        <p className="total-despesa-text">
          <strong>Total de despesas:</strong>
          {' '}
          {total.toFixed(2)}
          {' '}
          BRL
        </p>
      </div>
      <div className="email-container">
        <img src="/user.svg" alt="foto profile" />
        <p className="email" data-testid="email-field">{email}</p>
      </div>
    </header>
  );
}

export default Header;
