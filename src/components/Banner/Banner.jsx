import { Link } from 'react-router-dom';
const Banner = () => {

    return (
        <div>
            <div className="hero h-[550px] bg-gray-200 rounded-xl">
                <div className="hero-content w-11/12 md:w-4/5 flex-col md:flex-row md:gap-4 lg:gap-10 ">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-semibold">Books to freshen up your bookshelf</h1>
                        <Link to={'/listedBooks'}><button className="bg-green-600 px-5 py-2 rounded-lg font-medium text-white text-base mt-8">View The List</button></Link>
                    </div>
                    <img src="https://assets.teenvogue.com/photos/592da0a944e11d4a93584ce1/master/w_1600%2Cc_limit/9781408883730_310314.png" className="w-[50%] md:w-fit h-[50%] md:h-[500px]" />
                </div>
            </div>
        </div>
    );
};

export default Banner;