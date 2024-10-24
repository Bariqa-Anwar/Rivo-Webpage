import Image from "next/image"
function Product(){
    return(
        <>
        <section className="bg-white">
            <div>
                <h1 className="text-green-900 text-center font-semibold mt-40 text-3xl"> 
                    Our Products
                </h1>
                <div className="flex text-sm font-semibold">
                <button className="hover:underline hover:underline-offset-4 hover:text-green-900 ml-96 mt-16"> SALE </button>
                <button className="hover:underline hover:underline-offset-4 hover:text-green-900 ml-[80px] mt-16"> HOT </button>
                <button className="hover:underline hover:underline-offset-4 hover:text-green-900 ml-[90px] mt-16" > NEW ARRIVALS</button>
                <button className="hover:underline hover:underline-offset-4 hover:text-green-900 ml-[100px] mt-16"> ACCESSORIES </button>
                </div>
                <div className="mt-14 flex">
                    <div>
                    <Image className="ml-20 h-72 w-60" src="/images/model5.png" alt="model" height={250} width={250}/>
                    </div>
                    <div>
                    <Image  className="ml-20 h-72 w-60 bg-gray-200"src="/images/model6.png" alt="model" height={250} width={250}/>
                    </div>
                    <div>
                        <Image className="ml-20 h-72 w-60" src="/images/model7.png" alt="model" height={250} width={250}/>
                    </div>
                    <div>
                        <Image className="ml-20 h-72 w-60" src="/images/model8.png" alt="model" height={250} width={250}/>
                    </div>
                </div>
                <div className="font-semibold flex">
                    <p className="ml-32 mt-8"> Spread Collar Shirt </p>
                    <p className="mt-8 ml-40"> White Solid Formal Shirt </p>
                    <p className="mt-8 ml-36"> Shine On Me Blouse </p>
                    <p className="mt-8 ml-36"> Gray Solid Padded Jacket </p>
                </div>
                <div className="font-semibold flex">
                    <p className="ml-32 mt-3">$48.99</p>
                    <p className="ml-6 mt-2 "> | </p>
                    <p className="ml-6 mt-3"> 5.0 </p>
                    <p className="text-yellow-400 mt-3 ml-3"> ★ </p>
                </div>
                <div className="font-semibold flex mt-[-24px]">
                    <p className="ml-[450px]">$39.00</p>
                    <p className="ml-6  "> | </p>
                    <p className="ml-6"> 4.9 </p>
                    <p className="text-yellow-400 ml-3"> ★ </p>
                </div>
                <div className="font-semibold flex mt-[-24px]">
                    <p className="ml-[765px]">$42.99</p>
                    <p className="ml-6"> | </p>
                    <p className="ml-6"> 4.8 </p>
                    <p className="text-yellow-400 ml-3"> ★ </p>
                </div>
                <div className="font-semibold flex mt-[-24px] ">
                    <p className="ml-[1100px]">$32.99</p>
                    <p className="ml-6"> | </p>
                    <p className="ml-6"> 4.7 </p>
                    <p className="text-yellow-400 ml-3"> ★ </p>
                </div>
                <div className="mt-8 flex justify-around">
                <div>
                <Image className="h-72 w-60" src="/images/model9.png" alt="model" height={250} width={250}/>
                </div>
                <div>
                <Image className="h-72 w-60" src="/images/model10.png" alt="model" height={250} width={250}/>
                </div>
                <div>
                <Image className="h-72 w-60" src="/images/model11.png" alt="model" height={250} width={250}/>
                </div>
                <div className="bg-blue-100">
                <Image className="h-72 w-60" src="/images/model12.png" alt="model" height={250} width={250}/>
                </div>
                </div>
                <div className="font font-semibold flex justify-around mt-8">
                    <p> Printed Loose T-shirt </p>
                    <p> Summer Wind Crop Shirt</p>
                    <p> Tailored Jacket</p>
                    <p> Solid Round Neck T-shirt</p>
                </div>

                <div className="font-semibold flex mt-4">
                    <p className="ml-20">$39.99</p>
                    <p className="ml-8"> | </p>
                    <p className="ml-8"> 5.0 </p>
                    <p className="text-yellow-400 ml-3"> ★ </p>
                </div>                
                <div className="font-semibold flex mt-[-25px] ml-80">
                    <p className="ml-28">$39.95</p>
                    <p className="ml-7"> | </p>
                    <p className="ml-6"> 4.7 </p>
                    <p className="text-yellow-400 ml-3"> ★ </p>
                </div>                
                <div className="font-semibold flex mt-[-25px]">
                    <p className="ml-[770px]">$46.00</p>
                    <p className="ml-6"> | </p>
                    <p className="ml-6"> 4.9 </p>
                    <p className="text-yellow-400 ml-3"> ★ </p>
                </div>                
                <div className="font-semibold flex mt-[-25px]">
                    <p className="ml-[1100px]">$36.00</p>
                    <p className="ml-6"> | </p>
                    <p className="ml-6"> 5.0 </p>
                    <p className="text-yellow-400 ml-3"> ★ </p>
                </div>
                </div>
        </section>
        </>
    )
}
export default Product