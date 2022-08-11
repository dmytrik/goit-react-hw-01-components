import propTypes from 'prop-types';
import Stat from './Stat';
import s from './StatList.module.css';
import { StatBox } from './StatList.styled';
export default function StatList({ title = 'Заголовок секції', stats }) {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>

      <ul className={s.statList}>
        {stats.map(stat => (
          <StatBox key={stat.id}>
            <Stat label={stat.label} percentage={stat.percentage} />
          </StatBox>
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
