import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getProduct, checkVariant } from "../redux/actions/product.action";
import ReactStars from 'react-stars';

import ImageViewer from '../components/ImageViewer';
import ColorSelection from '../components/ColorSelection';
import MemorySelection from '../components/MemorySelection';

import { productActions } from '../redux/slices/product.slice';

const {
  setVariantName,
  setVariantMemory
} = productActions;

export default function Home() {
  const dispatch = useDispatch();

  const { product, variantName, variantMemory, variantPrice } = useSelector((state) => state.products);
  const { name, image, options, variants } = product;

  const [variant, setVariant] = useState([]);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const checkColorVariantsCallback = (data) => {
    dispatch(setVariantName(data));
    const result = variants.filter((variant) => variant.options.color == data);
    setVariant(result);
    dispatch(checkVariant());
  };

  const checkMemoryVariantsCallback = (data) => {
    dispatch(setVariantMemory(data));
    const result = variants.filter((variant) => variant.options.memory == data);
    setVariant(result);
    dispatch(checkVariant());
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
            {variantName}/{variantMemory}
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
          PHP{variantPrice}.00
          <p className="text-xs mx-0 mb-1 font-semibold text-center text-[#126B60]">VARIANTS:</p>
          <ColorSelection options={options} checkColorVariantsCallback={checkColorVariantsCallback} />
          <MemorySelection options={options} variant={variant} checkMemoryVariantsCallback={checkMemoryVariantsCallback}/>
        </div>
      </div>
    </>
  );
}
