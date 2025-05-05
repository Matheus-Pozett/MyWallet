import { useSelector } from 'react-redux';
import { TGlobalState } from '../types';

function Header() {
  const user = useSelector((globalState: TGlobalState) => globalState.user);
  return <div>{user.email}</div>;
}

export default Header;
