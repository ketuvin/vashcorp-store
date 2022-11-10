import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/actions/product.action";

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

  const checkVariants = (data) => {
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
          <ColorSelection options={options} />
          <MemorySelection options={options} checkVariantsCallback={checkVariants} />
        </div>
      </div>
    </>
  );
}
