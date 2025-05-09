import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addExpenseThunk, editExpense, getCurrenciesApi } from '../redux/actions';
import { AppDispatch, TGlobalState } from '../types';

type TWalletForm = {
  description: string,
  tag: string,
  value: string,
  method: string,
  currency: string
};

function WalletForm() {
  const { register, handleSubmit, reset } = useForm<TWalletForm>(
    { defaultValues: {
      description: '',
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    } },
  );

  const dispatch: AppDispatch = useDispatch();
  const currencie = useSelector((globalState: TGlobalState) => globalState.wallet);
  const { editor, idToEdit, expenses } = useSelector(
    (state: TGlobalState) => state.wallet,
  );
  const { currencies } = currencie;

  useEffect(() => {
    dispatch(getCurrenciesApi());
  }, [dispatch]);

  const onSubmit = (data: TWalletForm) => {
    if (editor) {
      const original = expenses.find((exp) => exp.id === idToEdit);
      if (!original) return;

      const updatedExpense = {
        ...data,
        id: original.id,
        exchangeRates: original.exchangeRates,
      };

      dispatch(editExpense(updatedExpense));
    } else {
      dispatch(addExpenseThunk(data));
    }
    reset();
  };

  return (
    <form onSubmit={ handleSubmit(onSubmit) }>
      <label htmlFor="despesa">Descrição da despesa</label>
      <input
        type="text"
        id="despesa"
        data-testid="description-input"
        { ...register('description') }
      />

      <label htmlFor="tag">Categoria da despesa</label>
      <select
        data-testid="tag-input"
        id="tag"
        { ...register('tag') }
      >
        <option value="Alimentação">Alimentação</option>
        <option value="Lazer">Lazer</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Transporte">Transporte</option>
        <option value="Saúde">Saúde</option>
      </select>

      <label htmlFor="valor">Valor</label>
      <input
        type="number"
        id="valor"
        data-testid="value-input"
        { ...register('value') }
      />

      <label htmlFor="metodo">Método de pagamento</label>
      <select
        data-testid="method-input"
        id="metodo"
        { ...register('method') }
      >
        <option value="Dinheiro">Dinheiro</option>
        <option value="Cartão de crédito">Cartão de crédito</option>
        <option value="Cartão de débito">Cartão de débito</option>
      </select>

      <label htmlFor="moeda">Moeda</label>
      <select
        data-testid="currency-input"
        id="moeda"
        { ...register('currency') }
      >
        {currencies.map((data) => (
          <option key={ data } value={ data }>{data}</option>
        ))}
      </select>
      <button type="submit">
        {editor ? 'Editar despesa' : 'Adicionar despesa'}
      </button>
    </form>
  );
}

export default WalletForm;
