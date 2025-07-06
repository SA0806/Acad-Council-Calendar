import React from 'react';
const CurrentLabel = ({ currentDate }) => {
  const label = currentDate.toLocaleDateString('default', {
    month: 'long',
    year: 'numeric',
  });
  return <div className="label-date btn btn-secondary">{label}</div>;
};
export default CurrentLabel;