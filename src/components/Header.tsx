import Image from "next/image"
function Header () {
  return(
<>
  <header className=" bg-green-200 bg-cover">
    <div className="max-w-screen-xl h-[600px] container mx-auto flex flex-col md:flex-row-reverse items-center justify-between 
    px-6 md:px-12">
                        {/* For Image on the left side */}
              <div>
              <div>
                <Image className="h-[500px] w-[1050px] mr-20"
                src="/images/first.png" alt="model" height={1000} width={1000}/>
              </div>
              </div>

                       {/* Right side Text */}
              <div className="mr-[400px] ml-8 text-black w-full text-left mb-32">
                   <h1 className="text-5xl font-semibold font-serif text-green-900">
                    Discover and<br/> Find Your Own<br/> Fashion! 
                   </h1>

                    <p className="text-semibold text-gray-600 mt-7 mb-10">
                    Explore our curated collection of stylish<br/> clothing and accessories tailored to your<br/> unique taste.
                    </p>
                    <button className="px-6 py-3 bg-green-900 text-white rounded-md hover:bg-green-700">
                     EXPLORE NOW 
                    </button>
              </div>
      </div>
  </header>
</>
  )
}
export default Header
