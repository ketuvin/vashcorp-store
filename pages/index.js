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
  const memoryOptions = ["32GB", "64GB", "256GB"];
  const dispatch = useDispatch();

  const { product, variantName, variantMemory, variantPrice } = useSelector((state) => state.products);
  const { name, image, options, variants } = product;

  const [availableMemory, setAvailableMemory] = useState([]);

  useEffect(() => {
    dispatch(getProduct());

    if (variantName == "BLUE" && variantMemory == "32GB") {
      dispatch(setVariantMemory("64GB"));

      const availableMemory = []
      let memories = memoryOptions.filter((memory) => memory == "64GB");
      availableMemory.push(memories[0]);
      setAvailableMemory(availableMemory);
    }
  }, [dispatch]);

  const checkColorVariantsCallback = (data) => {
    dispatch(setVariantName(data));
    const result = variants.filter((variant) => variant.options.color == data);
    const availableMemory = []
    result.forEach((variant) => {
      let memories = memoryOptions.filter((memory) => variant.options.memory == memory);
      availableMemory.push(memories[0]);
    });
    dispatch(setVariantMemory(availableMemory[0]));
    setAvailableMemory(availableMemory);
    dispatch(checkVariant());
  };

  const checkMemoryVariantsCallback = (data) => {
    dispatch(setVariantMemory(data));
    dispatch(checkVariant());
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="col-span-3 mr-20 items-center">
          <p className="mt-5 text-base text-[#707070]">Shop &gt; Mobile phones &gt; Samsung &gt; <span className="font-bold text-black">{name}</span></p>
          <ImageViewer src={image} />
        </div>
        <div className="col-span-9 w-96 mt-16">
          <h1 className="font-semibold text-center text-xl">
            Samsung {name}
            <br />
            {variantName}/{variantMemory}
          </h1>
          <p className="mx-0 mb-2.5 underline text-center text-[#707070]">Mobile phones:</p>
          <ReactStars
            className="flex justify-center"
            count={5}
            value={4.5}
            size={22}
            edit={false}
            color2={'#f36d22'}
          />
          <p className="text-xl mt-2.5 font-semibold text-center text-[#f36d22]">{new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP'}).format(variantPrice)}</p>
          <p className="text-xs mt-2.5 mb-1 font-semibold text-center text-[#126B60]">VARIANTS:</p>
          <ColorSelection options={options} checkColorVariantsCallback={checkColorVariantsCallback} />
          <MemorySelection options={options} availableMemory={availableMemory} checkMemoryVariantsCallback={checkMemoryVariantsCallback}/>
        </div>
      </div>
    </>
  );
}
