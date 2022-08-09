import propTypes from 'prop-types';
import Stat from './Stat';
export default function StatList({ title = 'Заголовок секції', stats }) {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        {stats.map(stat => (
          <li className="item" key={stat.id}>
            <Stat label={stat.label} percentage={stat.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}
StatList.propTypes = {
  stats: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
    })
  ),
};
