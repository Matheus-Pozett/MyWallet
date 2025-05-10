import Header from '../components/Header';
import Table from '../components/Table';
import WalletForm from '../components/WalletForm';
import './wallet.css';

function Wallet() {
  return (
    <main className="main">
      <div className="header-form">
        <Header />
        <WalletForm />
      </div>
      <Table />
    </main>
  );
}

export default Wallet;
