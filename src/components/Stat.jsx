import propTypes from 'prop-types';
export default function Stat({ label, percentage }) {
  return (
    <div>
      <span class="label">{label}</span>
      <span class="percentage">{percentage}%</span>
    </div>
  );
}
Stat.propTypes = {
  label: propTypes.string.isRequired,
  percentage: propTypes.number.isRequired,
};
