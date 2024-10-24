import Image from "next/image";

function Cloth() {
    return(
        <>
        <main className="text-green-950 text-center font-semibold mt-56">
            <div>
            <h1 className="text-3xl"> Designer Clothes For You  </h1>
                <div>
                    <h1 className="mt-10"> 
                        Immerse yourself in the world of luxury fashion with our meticulously crafted designer clothes!</h1>
                </div>
                <div className="flex justify-around mt-16">
                <div className="text-gray-900 font-semibold">
                <Image className="bg-blue-100" src="/images/model14.png" alt="model" height={250} width={250}/>
                <h1 className="text-xl mt-6">Accessories</h1>
                <p className="mt-4">Complete your esemble with
                <br/>designer accessories such as
                <br/>hand bags, scarves, belts and hats</p>
                </div>

                <div>
                <Image src="/images/model15.png" alt="model" height={250} width={250}/>
                <h1 className="text-xl mt-6"> Dresses </h1>
                <p className="mt-4">Explore a stunning range of designer
                 <br/>dresses, including evening gowns
                 <br/> and chic day dresses   
                </p>
                </div>

                <div>
                <Image src="/images/model16.png" alt="model" height={250} width={250}/>
                <h1 className="text-xl mt-6">Outerwear</h1>
                <p className="mt-4"> Browse luxurious designer coats,
                 <br/>jackets, and blazers to stay stylishly
                 <br/>warm during colder seasons.   
                </p>
                </div>
                </div>
            </div>
        </main>
        </>

    )
}
export default Cloth;