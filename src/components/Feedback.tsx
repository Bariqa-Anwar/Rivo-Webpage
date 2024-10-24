import Image from "next/image";

function Feedback(){
    return(
        <main className="bg-white mt-56">
            <h1 className="text-green-900 font-semibold text-4xl text-center">Feedback Corner </h1>

            <div className="flex mt-9">
            <div className=" shadow-lg container h-56 w-[380px] bg-white mt-12 ml-10 font-semibold mb-7">
                <Image className="ml-5" src="/images/commas.PNG" alt="impression" height={30} width={30}/>
                <h1 className="text-green-900 mt-4 ml-5"> Emily Wilson </h1>
                <p className="mt-4 ml-5"> The customer experience was exceptional from
                <br/>start to finish. The website is user-friendly, the
                <br/>checkout process was smooth, and the clothes
                <br/>I ordered fit perfectly. I'm beyond satisfied!
                </p>
            </div>

            <div className="shadow-lg container h-56 w-[390px] bg-green-200 mt-12 ml-6 font-semibold mb-7">
                <Image className="ml-5 bg-green-200" src="/images/comma2.PNG" alt="impression" height={30} width={30}/>
                <h1 className="text-green-900 mt-4 ml-5"> Sarah Thompson </h1>
                <p className="mt-4 ml-3">I absolutely love the quality and style of
                <br/>clothing I purchased from the website. Customer<br/>service was outstanding, and I received my order
                <br/>quickly. Highly recommended!
                </p>
                <div className="mt-36 ml-40 flex">
                    <button className="shadow-lg container h-9 w-10 bg-white mr-12 p-3 mb-4">
                        <Image src="/images/larrow.png" alt="button" height={10} width={10}/></button>
                    <button className="siza-20 bg-green-200 h-9 w-9 p-3">
                    <Image src="/images/rarrow.png" alt="button" height={10} width={10}/></button>
                </div> 
                </div>
                
            <div className="shadow-lg container h-56 w-[380px] bg-white mt-12 ml-6 font-semibold mb-24">
                <Image className="ml-5" src="/images/commas.PNG" alt="impression" height={30} width={30}/>
                <h1 className="text-green-900 mt-4 ml-5"> Olivia Martinez </h1>
                <p className="mt-4 ml-4">I had a great experience shopping on this
                <br/>websites. The clothes I bought are fashionable
                <br/>and comfortable. Highly satisfied!
                </p>
                </div>
                </div>     
        </main>

    )
}
export default Feedback;