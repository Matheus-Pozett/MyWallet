// import { useForm } from 'react-hook-form';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrenciesApi } from '../redux/actions';
import { AppDispatch, TGlobalState } from '../types';

function WalletForm() {
  // const { register } = useForm();
  const dispatch: AppDispatch = useDispatch();
  const currencie = useSelector((globalState: TGlobalState) => globalState.wallet);
  const { currencies } = currencie;

  useEffect(() => {
    dispatch(getCurrenciesApi());
  }, []);

  return (
    <form>
      <label htmlFor="despesa">Descrição da despesa</label>
      <input type="text" id="despesa" />

      <label htmlFor="tag">Categoria da despesa</label>
      <select data-testid="tag-input" id="tag">
        <option value="">Alimentação</option>
        <option value="">Lazer</option>
        <option value="">Trabalho</option>
        <option value="">Transporte</option>
        <option value="">Saúde</option>
      </select>

      <label htmlFor="valor">Valor</label>
      <input
        type="text"
        id="valor"
        data-testid="value-input"
      />

      <label htmlFor="metodo">Método de pagamento</label>
      <select data-testid="method-input" id="metodo">
        <option value="dinheiro">Dinheiro</option>
        <option value="credito">Cartão de crédito</option>
        <option value="debito">Cartão de débito</option>
      </select>

      <label htmlFor="moeda">Moeda</label>
      <select data-testid="currency-input" id="moeda">
        {currencies.map((data) => (
          <option key={ data }>{data}</option>
        ))}
      </select>
      <button type="submit">Adicionar Despesa</button>
    </form>
  );
}

export default WalletForm;
