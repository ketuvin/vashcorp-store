import Image from "next/image";

const ImageViewer = (props) => {
    return (
        <div className="pl-0 pr-0 mt-16">
             <Image layout="fixed" width={456} height={370} src={props.src} className="" alt="Phone Logo" />
        </div>
    )
};

export default ImageViewer;