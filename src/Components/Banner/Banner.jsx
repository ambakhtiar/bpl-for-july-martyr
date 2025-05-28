import bannerImg from '../../assets/banner-main.png';


export default function Hero({ handleAddCoin }) {
    return (
        <div className="relative h-[300px] md:h-[400px] py-10 w-full flex items-center justify-center text-center bg-gradient-to-r from-[#111827] via-[#1f2937] to-[#374151] rounded-lg overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute -left-20 -bottom-20 w-80 h-72 bg-blue-200 rounded-full blur-2xl opacity-30"></div>
            <div className="absolute -right-20 -top-20 w-80 h-72 bg-pink-400 rounded-full blur-2xl opacity-30"></div>

            {/* Main Content */}
            <div className="px-6">
                <img
                    src={bannerImg}
                    alt="Cricket"
                    className="mx-auto w-24 h-24"
                />
                <h1 className="text-white text-xl md:text-2xl font-semibold mt-4">
                    BPL for July Martyrs
                </h1>
                <p className="text-gray-300 text-sm mt-2">
                    Beyond Boundaries Beyond Limits
                </p>
                <div className='mt-4 border border-lime-400 rounded-xl w-max'>
                    <button onClick={handleAddCoin} className=" m-1 bg-lime-400 hover:bg-lime-600 text-black font-semibold px-3 py-2 rounded-xl shadow-md">
                        Claim Free Benefit
                    </button>
                </div>
            </div>
        </div>
    );
}
