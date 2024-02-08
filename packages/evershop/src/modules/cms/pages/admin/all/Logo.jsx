import PropTypes from 'prop-types';
import React from 'react';
import './Logo.scss';

export default function Logo({ dashboardUrl }) {
  return (
    <div className="logo">
      <a href={dashboardUrl} className="flex items-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="146"
          height="136"
          fill="none"
          viewBox="0 0 146 136"
        >
          <g transform="translate(0.000000,136.000000) scale(0.100000,-0.100000)"
            fill="#000000" stroke="none">
            <path d="M310 1224 c0 -3 10 -14 21 -23 13 -11 62 -119 128 -286 59 -148 112
              -270 118 -272 6 -2 14 5 18 17 6 20 8 19 24 -12 14 -27 40 -44 141 -94 137
              -67 170 -97 170 -150 0 -51 -16 -73 -66 -96 -39 -17 -52 -18 -97 -8 -63 13
              -118 55 -150 113 l-22 42 -3 -54 c-4 -65 3 -74 81 -101 142 -50 276 -3 306
              107 24 85 -21 141 -158 198 -50 21 -107 52 -127 69 -32 28 -37 38 -37 76 0 36
              6 48 30 70 37 33 90 44 143 30 44 -12 106 -60 115 -91 11 -34 25 -20 25 27 0
              43 -2 46 -37 61 -55 23 -158 27 -216 9 -34 -10 -47 -11 -44 -3 65 179 125 323
              144 340 32 31 29 37 -18 37 -35 0 -40 -2 -33 -17 14 -33 6 -62 -55 -220 -65
              -169 -107 -258 -114 -246 -3 5 -42 102 -87 218 -58 151 -80 218 -76 238 l6 27
              -65 0 c-36 0 -65 -3 -65 -6z"/>
          </g>
        </svg>
      </a>
    </div>
  );
}

Logo.propTypes = {
  dashboardUrl: PropTypes.string.isRequired
};

export const layout = {
  areaId: 'header',
  sortOrder: 10
};

export const query = `
  query Query {
    dashboardUrl: url(routeId:"dashboard")
  }
`;
