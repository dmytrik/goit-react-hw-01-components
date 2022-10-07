import propTypes from 'prop-types';
import s from './Stat.module.css';
export default function Stat({ label, percentage }) {
  return (
    <>
      <span className="label">{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </>
  );
}
Stat.propTypes = {
  label: propTypes.string.isRequired,
  percentage: propTypes.number.isRequired,
};
