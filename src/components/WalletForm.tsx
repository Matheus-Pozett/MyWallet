// import { useForm } from 'react-hook-form';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrenciesApi } from '../redux/actions';
import { AppDispatch } from '../types';

function WalletForm() {
  // const { register } = useForm();
  const dispatch: AppDispatch = useDispatch();

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
        <option value="">Dinheiro</option>
        <option value="">Cartão de crédito</option>
        <option value="">Cartão de débito</option>
      </select>

      <label htmlFor="moeda">Moeda</label>
      <select data-testid="currency-input" id="moeda">
        <option value="">Dinheiro</option>
        <option value="">Cartão de crédito</option>
        <option value="">Cartão de débito</option>
      </select>
    </form>
  );
}

export default WalletForm;
