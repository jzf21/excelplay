import React from 'react';

const Loader: React.FC = () => {
  return (
    <svg viewBox="0 0 600 300">
      {/* Symbol */}
      <symbol id="s-text">
        <text textAnchor="middle" x="50%" y="50%" dy=".35em">
          PLAY
        </text>
      </symbol>

      {/* Duplicate symbols */}
      <use xlinkHref="#s-text" className="text"></use>
      <use xlinkHref="#s-text" className="text"></use>
      <use xlinkHref="#s-text" className="text"></use>
      <use xlinkHref="#s-text" className="text"></use>
      <use xlinkHref="#s-text" className="text"></use>
    </svg>
  );
};

export default Loader;