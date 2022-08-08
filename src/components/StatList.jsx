import propTypes from 'prop-types';
import Stat from './Stat';
export default function StatList({ stats }) {
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>

      <ul class="stat-list">
        {stats.map(stat => (
          <li class="item" key={stat.id}>
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
