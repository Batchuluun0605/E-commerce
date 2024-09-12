import React, { useState } from "react";

const ProductsFilter = ({
  minPrice,
  setMinPrice,
  setMaxPrice,
  loading,
}: {
  minPrice: number;
  setMinPrice: (v: number) => void;
  setMaxPrice: (v: number) => void;
  loading: boolean;
}) => {
  const [minPricePreview, setMinPricePreview] = useState(0);
  const [maxPricePreview, setMaxPricePreview] = useState(0);
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-1 my-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="minPrice">Min Price</label>
            <input
              disabled={loading}
              defaultValue={minPrice}
              type="range"
              min={0}
              max={10000}
              step={10}
              onMouseUp={(e: React.MouseEvent<HTMLInputElement>) =>
                setMinPrice(parseInt(e.currentTarget.value))
              }
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setMinPricePreview(parseInt(e.currentTarget.value))
              }
              className="h-2 w-full cursor-pointer rounded-lg bg-gray-200"
            />
          </div>
          <div>
            <label
              htmlFor="maxPrice"
              className="block text-sm font-medium text-gray-900"
            >
              Max Price
            </label>
            <input
              disabled={loading}
              type="range"
              min={0}
              max={10000}
              defaultValue={0}
              step={10}
              onMouseUp={(e: React.MouseEvent<HTMLInputElement>) =>
                setMaxPrice(parseInt(e.currentTarget.value))
              }
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setMaxPricePreview(parseInt(e.currentTarget.value))
              }
              className="h-2 w-full cursor-pointer rounded-lg bg-gray-200"
            />
          </div>
          <div className="col-span-2 flex items-center justify-between space-x-2">
            <input
              type="number"
              min={0}
              max={10000}
              value={minPricePreview}
              readOnly
              required
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
            />
            <div className="shrink-0 text-sm font-medium">to</div>
            <input
              type="number"
              min={0}
              max={10000}
              value={maxPricePreview}
              readOnly
              required
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsFilter;
