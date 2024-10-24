import Image from "next/image"

function Exclusive (){
    return(
        <>
        <section>
            <div className="bg-green-200 text-green-900 font-semibold bg-cover w-[1200px] h-[350px] container mx-auto flex 
            flex-col md:flex-row-reverse items-center justify-between px-6 md:px-12 mt-52 mb-24">
                <div>
                    {/* For left side text */}
                    <h1 className=" flex text-4xl font-semibold mr-80"> Exclusive offer </h1>
            
                    <p className="mt-3"> Unlock the ultimate style upgrade with our exclusive
                    <br/>offer Enjoy savings of up to 40% off on our latest New 
                    <br/>Arrivals</p>
                    <p className="flex mt-3">
                    <Image src="/images/day6.png" alt="date" height={100} width={100}/>
                    <Image src="/images/hours.png" alt="time" height={100} width={100}/>
                    <Image src="/images/min.png" alt="minutes" height={100} width={100}/>
                    </p>
                    <button className="bg-green-900 text-white font-semibold p-2 text-sm w-36 h-12">
                        BUY NOW
                    </button>

                    </div>
                {/* For right side text */}
                <div>
                    <Image className="mt-4" 
                    src="/images/model13.png" alt="model" height={270} width={270}/>
                </div>
            </div>
        </section>
        </>

    )
}
export default Exclusive