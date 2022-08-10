import propTypes from 'prop-types';
import Transaction from './Transaction';
import s from './Transactions.module.css';
export default function TransactionHistory({ transactions }) {
  return (
    <div className={s.container}>
      <table className={s.transactionHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <Transaction type={type} amount={amount} currency={currency} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
TransactionHistory.propTypes = {
  transactions: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
    })
  ),
};
