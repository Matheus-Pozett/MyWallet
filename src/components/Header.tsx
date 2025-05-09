import { useSelector } from 'react-redux';
import { TGlobalState } from '../types';

function Header() {
  const { email } = useSelector((globalState: TGlobalState) => globalState.user);
  const expenses = useSelector((state: TGlobalState) => state.wallet.expenses);

  const total = expenses.reduce((acc, expense) => {
    const { value, currency, exchangeRates } = expense;
    const valorConvertido = Number(value) * Number(exchangeRates[currency].ask);
    return acc + valorConvertido;
  }, 0);

  return (
    <header>
      <img
        src="/mywallet.svg"
        alt="logo"
      />
      <p
        data-testid="total-field"
      >
        {total.toFixed(2)}
      </p>
      <p data-testid="header-currency-field">BRL</p>
      <p data-testid="email-field">{email}</p>
    </header>
  );
}

export default Header;
