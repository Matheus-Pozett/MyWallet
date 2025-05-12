import { useDispatch, useSelector } from 'react-redux';
import { TGlobalState } from '../types';
import { deleteExpense, startEditExpense } from '../redux/actions';
import './table.css';

function Table() {
  const expenses = useSelector(
    (globalState: TGlobalState) => globalState.wallet.expenses,
  );

  const dispatch = useDispatch();

  const handleDeleteExpense = (id: number) => {
    dispatch(deleteExpense(id));
  };

  return (
    <table className="table">
      <thead>
        <tr className="cabecalho">
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
      <tbody className="tbody">
        {expenses.map((expense) => {
          const {
            currency, description, exchangeRates, id, method, tag, value } = expense;
          const exchangeRate = Number(exchangeRates[currency].ask);
          const convertedValue = Number(value) * exchangeRate;

          return (
            <tr key={ id } className="items">
              <td className="desc">{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{Number(value).toFixed(2)}</td>
              <td>{exchangeRates[currency].name}</td>
              <td>{exchangeRate.toFixed(2)}</td>
              <td>{convertedValue.toFixed(2)}</td>
              <td>Real</td>
              <td>
                <button
                  data-testid="edit-btn"
                  onClick={ () => dispatch(startEditExpense(id)) }
                  className="button-edit"
                >
                  <img src="/Editar.svg" alt="editar" className="img-edit" />
                </button>
                <button
                  onClick={ () => handleDeleteExpense(id) }
                  data-testid="delete-btn"
                  className="button-excluir"
                >
                  <img src="/exluir.svg" alt="excluir" className="img-excluir" />
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
