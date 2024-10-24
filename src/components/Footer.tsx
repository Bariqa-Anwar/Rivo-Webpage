import Image from "next/image";

function Footer (){
    return(
        <>
        <footer className=" max-w bg-green-900 h-[500px]  mt-52 font-serif text-white ">
            <div>
                <h1 className="font-semibold ml-12 text-4xl p-24">Rivo</h1>
                <p className="text-xl ml-36 -mt-12"> Social Media</p>
                <p className="flex ml-36 mt-6">
                    <Image src="/images/fb.PNG" alt="fb logo" height={20} width={20}/>
                    <Image className="ml-8" src="/images/twitter.PNG" alt="twitter logo" height={20} width={20}/>
                    <Image className="ml-7" src="/images/insta.PNG" alt="insta logo" height={20} width={20}/>
                </p>
            </div>
            <div className="ml-[450px] font-serif">
                <h1 className="font-serif text-lg -mt-36"> SHOP </h1>
                <p className="mt-4">Products</p>
                <p className="mt-2">Overview</p>
                <p className="mt-2">Pricing</p>
                <p className="mt-2">Releases</p>
            </div>
            <div className="ml-[650px] font-serif">
                <h1 className="font-serif text-lg -mt-40">COMPANY</h1>
                <p className="mt-4">About Us</p>
                <p className="mt-2">Contact</p>
                <p className="mt-2">News</p>
                <p className="mt-2">Support</p>
            </div>
            <div className="ml-[900px]">
                <h1 className="-mt-40 text-lg">STAY UP TO DATE</h1>
                <p className="border border-green-200 h-9 w-[250px] font-sans pl-5 py-2 mt-5">Enter your email</p>

                <div className="-mt-9">
                <button className=" bg-green-200 h-9 w-16 text-green-950 font-sans font-semibold text-sm ml-64 mr-28">
                    SUBMIT
                    </button>
                </div>
                <div>
                <hr className="border border-green-200 w-[700px] mt-60 ml-[-760px]"/>
                </div>
                <div className="flex justify-evenly mr-64 gap-6">
                <p> Terms </p> 
                <p> Privacy </p>
                <p> Cookies </p>
                </div>
                </div>
        </footer>       
        </>

    )
}
export default Footer;