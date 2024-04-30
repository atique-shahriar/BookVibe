import { Link } from 'react-router-dom';

const ErrorPage = () => {

    return (
        <div className="h-screen w-screen flex flex-col gap-6 items-center justify-center">
            <h3 className="text-6xl font-bold">Warning!!!</h3>
            <h3 className="text-3xl font-bold">Cannot found any page</h3>
            <p className="text-base font-bold text-red-600">Url is not correct......</p>
            <Link to={'/'}><button className='bg-green-600 text-white font-medium px-5 py-2'>Back to home</button>
            </Link>

        </div>
    );
};

export default ErrorPage;