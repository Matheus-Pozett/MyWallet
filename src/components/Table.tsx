import { useSelector } from 'react-redux';
import { TGlobalState } from '../types';

function Table() {
  const expenses = useSelector(
    (globalState: TGlobalState) => globalState.wallet.expenses,
  );

  return (
    <table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => {
          const {
            currency, description, exchangeRates, id, method, tag, value } = expense;
          const exchangeRate = Number(exchangeRates[currency].ask);
          const convertedValue = Number(value) * exchangeRate;

          return (
            <tr key={ id }>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{Number(value).toFixed(2)}</td>
              <td>{exchangeRates[currency].name}</td>
              <td>{exchangeRate.toFixed(2)}</td>
              <td>{convertedValue.toFixed(2)}</td>
              <td>Real</td>
              <td>
                <button>Editar</button>
                <button>Excluir</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
