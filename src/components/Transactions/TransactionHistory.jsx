import propTypes from 'prop-types';
import Transaction from './Transaction';
export default function TransactionHistory({ transactions }) {
  return (
    <table className="transaction-history">
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
  );
}
TransactionHistory.propTypes = {
  transactions: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
    })
  ),
};
