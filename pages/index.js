import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/actions/product.action";
import ReactStars from 'react-stars';

import ImageViewer from '../components/ImageViewer';
import ColorSelection from '../components/ColorSelection';
import MemorySelection from '../components/MemorySelection';

export default function Home() {
  const dispatch = useDispatch();

  const { product } = useSelector((state) => state.products);
  const { name, image, options, variants } = product;

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const checkVariantsCallback = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className='flex justify-center mt-16'>
        <div className='col-span-3 items-center'>
          <ImageViewer src={image} />
        </div>
        <div className='col-span-9'>
          <h1 className='font-semibold text-center text-xl'>
            Samsung {name}
            <br />
            {name}
          </h1>
          <p className="mx-0 mb-2.5 underline text-center text-[#707070]">Mobile phones:</p>
          <ReactStars
            className="flex justify-center"
            count={5}
            value={4.5}
            size={24}
            edit={false}
            color2={'#f36d22'}
          />
          <p className="text-xs mx-0 mb-1 font-semibold text-center text-[#126B60]">VARIANTS:</p>
          <ColorSelection options={options} />
          <MemorySelection options={options} checkVariantsCallback={checkVariantsCallback} />
        </div>
      </div>
    </>
  );
}
