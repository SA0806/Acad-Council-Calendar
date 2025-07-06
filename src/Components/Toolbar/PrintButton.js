import React from 'react';
const PrintButton = () => (
//   <button className="btn btn-outline-dark print-btn" onClick={() => window.print()}>
//     🖨️ Print
//   </button>
<button className="btn btn-light print-btn" onClick={() => window.print()}>
  <i className="fas fa-print"></i> Print
</button>
);
export default PrintButton;