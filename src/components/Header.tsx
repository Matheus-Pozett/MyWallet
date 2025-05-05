import { useSelector } from 'react-redux';
import { TGlobalState } from '../types';

function Header() {
  const { email } = useSelector((globalState: TGlobalState) => globalState.user);

  return (
    <header>
      <img
        src="/mywallet.svg"
        alt="logo"
      />
      <p
        data-testid="total-field"
      >
        {`Total de despesas: ${0} `}
        <span data-testid="header-currency-field">BRL</span>
      </p>
      <p data-testid="email-field">{email}</p>
    </header>
  );
}

export default Header;
