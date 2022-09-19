import PropTypes from 'prop-types';
import style from './TransactionHistory.module.css';
import TransactionElem from './TransactionElem/TransactionElem';

function TransactionHistory({ items }) {
  return (
    <table className={style.transaction}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(el => (
          <TransactionElem
            key={el.id}
            type={el.type}
            amount={el.amount}
            currency={el.currency}
          />
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TransactionHistory;
