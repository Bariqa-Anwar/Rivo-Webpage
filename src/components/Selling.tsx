import Image from "next/image"

function Selling(){
    return(
        <section className=" bg-white bg-cover">
            <div>
                <h1 className="text-center mr-3 text-green-900 mt-32 font-semibold text-5xl"> Best Selling </h1>
                <div>
                    <h4 className="text-justify ml-96 mr-80 mt-12 text-lg text-green-900 font-serif font-semibold"> 
                        Get in on the trend with our curated selection of best-selling styles.
                    </h4>
                    <div className="flex p-11 justify-evenly">
                        <Image src="/images/model2.png" alt="model" height={300} width={250} 
                        className="bg-customGreen" />
                        <Image src="/images/model3.png" alt="model" height={300} width={250} 
                        className="ml-28 bg-customLightGreen"/>
                        <Image src="/images/model4.png" alt="model" height={300} width={250} className="ml-28 bg-blue-100"/>
                        </div>
                        
                        <div className="flex font-serif">
                            <h1 className="text-sm font-semibold ml-36">Regular Fit Long Sleeve Top</h1>
                            <h1 className="text-sm font-semibold ml-60">Black Crop Tailored Jacket</h1>
                            <h1 className="text-sm font-semibold ml-64">Textured Sunset Shirt </h1>
                        </div>
                        <div>
                        <p className="mt-6 ml-44 ">$38.99</p>
                        <p className="ml-60 mt-[-24px]"> | </p>
                        <p className="mt-[-24px] ml-64 mr-96"> 5.0 </p>
                        <p className="mt-[-24px] ml-72 text-yellow-400"> ★</p>
                        </div>
                        <div>
                        <p className="mt-[-23px] ml-[600px]  ">$62.99</p>
                        <p className="ml-[668px] mt-[-24px]"> | </p>
                        <p className="mt-[-24px] ml-[685px]"> 4.9 </p>
                        <p className="mt-[-24px] ml-[720px] text-yellow-400"> ★</p>
                        </div>
                        <div>
                        <p className="mt-[-23px] ml-[1050px]  ">$49.99</p>
                        <p className="ml-[1118px] mt-[-24px]"> | </p>
                        <p className="mt-[-24px] ml-[1135px]"> 5.0 </p>
                        <p className="mt-[-24px] ml-[1170px] text-yellow-400"> ★</p>
                        </div>
                        <div className="text-green-900">
                            <button className=" flex border border-green-900 px-6 py-2 bg-white
                             ml-[600px] mt-14 p-8 border-spacing-4 font-semibold text-justify">
                                 See all
                                <Image className="ml-4 mt-1" 
                                src="/images/arrow.jpg" alt="arrow" height={20} width={20}/>  
                            </button>
                        </div>

                </div>

            </div>

        </section>
    )
}
export default Selling