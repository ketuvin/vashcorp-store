import Image from "next/image";

const AppHeader = () => {
    return (
        <nav className="bg-[#f36d22] py-3.5 px-3.5">
             <Image layout="fixed" width={150} height={150} src="https://dev.alleyway.ph/static/media/logo.ad13ba5d.png" className="" alt="Alleyway Logo" />
        </nav>
    )
};

export default AppHeader;