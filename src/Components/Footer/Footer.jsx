import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <div className=''>
            {/* Subscribe Section  */}
            <div className='relative z-10 top-32 mt-16 w-11/12 md:max-w-4xl lg:max-w-5xl mx-auto border border-white rounded-2xl'>
                <div className="m-2 py-20 rounded-2xl bg-gradient-to-tr from-[#e0f7fa] via-white to-[#ffe0b2] shadow-md ">
                    <h2 className="text-lg md:text-xl font-semibold text-gray-900 text-center">
                        <span className="font-bold">Subscribe</span> to our Newsletter
                    </h2>
                    <p className="text-sm text-gray-600 text-center mt-1">
                        Get the latest updates and news right in your inbox!
                    </p>

                    <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2">
                        <input type="email"
                            placeholder="Enter your email"
                            className="w-3/10  m:flex-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                        <button type="submit"
                            className="bg-gradient-to-r from-yellow-400 to-pink-400 text-white font-semibold px-5 py-2 rounded-xl hover:opacity-90 transition"
                        > Subscribe
                        </button>
                    </div>
                </div>
            </div>


            {/* Footer  */}
            <div className=' bg-black flex flex-col justify-center items-center text-white text-center md:text-left space-y-8 pt-40'>
                <img src={logo} alt="" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-11/12 md:max-w-4xl lg:max-w-5xl mx-auto pb-10">
                    <div className='space-y-4'>
                        <h3 className='text-2xl font-semibold'>About Us</h3>
                        <p>We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>
                    <div className='space-y-4'>
                        <h3 className='text-2xl font-semibold'>Quick Links</h3>
                        <ul className='md:list-disc list-inside'>
                            <li>Home</li>
                            <li>Services</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className='space-y-4 mx-auto'>
                        <h3 className='text-2xl font-semibold'>Subscribe</h3>
                        <p>Subscribe to our newsletter for the latest updates.</p>
                        <div className='flex md:flex-col lg:flex-row w-3/4 md:w-auto mx-auto md:items-left md:gap-2 lg:gap-0 '>
                            <input className='px-2 py-2 border-none rounded-l-xl md:rounded-xl lg:rounded-none lg:rounded-l-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-700' type="email" placeholder="Enter Your Email" />
                            <button className='px-2 py-2 border-none rounded-r-xl md:rounded-xl lg:rounded-none lg:rounded-r-xl bg-gradient-to-r from-yellow-400 to-pink-400'>Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className='text-center border-t border-t-gray-800 w-full'>
                    <p className='my-8'>July Revolution (Bangladesh) @2025 Our Company All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;