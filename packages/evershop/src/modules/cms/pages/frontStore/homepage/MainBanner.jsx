import React from 'react';
import { _ } from '@evershop/evershop/src/lib/locale/translate';
import './MainBanner.scss';

export default function MainBanner() {
  const text = ''
  return (
    <div className="main-banner-home flex items-center">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-2">
        <div />
        <div classname="text-center md:text-left px-2 ">
          <h2 classname="h1 ">{text}</h2>
          <p>
            <span classname="font-bold"></span>
          </p>
          <p></p>
          <p />
        </div>
      </div>
    </div>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 1
};
