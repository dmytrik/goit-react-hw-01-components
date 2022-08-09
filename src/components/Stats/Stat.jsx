import propTypes from 'prop-types';
export default function Stat({ label, percentage }) {
  return (
    <>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </>
  );
}
Stat.propTypes = {
  label: propTypes.string.isRequired,
  percentage: propTypes.number.isRequired,
};
