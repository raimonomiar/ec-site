import React from 'react';
import Button from '@components/frontStore/cms/Button';

export default function FeaturedCategories() {
  return (
    <div className="mt-15">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 page-width">
        <div>
          <div className="text-center">
            <img src="/assets/homepage/banner/men-shoes.jpeg" alt="" />
          </div>
          <h3 className="h4 uppercase mt-1 mb-1">Men shoes collection</h3>
          <div className="mb-1">
            <p>
              Constructed from luxury nylons, leathers, and custom hardware,
              featuring sport details such as hidden breathing vents, waterproof
              + antimicrobial linings, and more.
            </p>
          </div>
          <Button url="/kids" title="Shop kids" variant="primary" />
        </div>
        <div>
          <div>
            <img src="/assets/homepage/banner/women-shoes.jpeg" alt="" />
          </div>
          <h3 className="h4 uppercase mt-1 mb-1">Women shoes collection</h3>
          <div className="mb-1">
            <p>
              Constructed from luxury nylons, leathers, and custom hardware,
              featuring sport details such as hidden breathing vents, waterproof
              + antimicrobial linings, and more.
            </p>
          </div>
          <Button url="/women" title="Shop women" variant="primary" />
        </div>
        <div>
          <div>
            <img src="/assets/homepage/banner/kid-shoes.jpeg" alt="" />
          </div>
          <h3 className="h4 uppercase mt-1 mb-1">Men shoes collection</h3>
          <div className="mb-1">
            <p>
              Constructed from luxury nylons, leathers, and custom hardware,
              featuring sport details such as hidden breathing vents, waterproof
              + antimicrobial linings, and more.
            </p>
          </div>
          <Button url="/men" title="Shop men" variant="primary" />
        </div>
      </div>
    </div>
  );
}

