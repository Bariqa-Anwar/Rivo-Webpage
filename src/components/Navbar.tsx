import Image from "next/image";

function Navbar(){
    return(
    <>
    <nav className="bg-green-200">
        <div className=" ml-28 pt-2  font-serif">
                    <div className="flex items-start text-green-900">    
                        <h3 className="font-extrabold text-3xl mt-1"> Rivo </h3>
                        <div>
                            <div className="flex gap-x-12 font-semibold text-green-800">
                                <ul className="flex gap-8 ml-72 mt-3">
                                    <li> HOME</li>
                                    <li> SHOP</li>
                                    <li> FEATURES </li>
                                    <li> CONTACT </li>
                                </ul>
                                <div className="ml-44 pb-4 pt-2 mt-2">
                                <button> <Image src="/images/logo.png" alt="logo" width="25" height="25"/></button>
                                </div>
                                <div className="mt-3">
                                <button className="border border-black px-6 py-1"> LOGIN </button>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    </nav>
</>
)
}
export default Navbar