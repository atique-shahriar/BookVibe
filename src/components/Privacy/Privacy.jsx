
import { Link } from 'react-router-dom';

const Privacy = () => {
    return (
        <div>
            <div className="bg-gray-100 rounded-xl p-5 my-6">
                <h4 className="text-3xl font-bold text-center">Privacy Policy for Book Vibe</h4>
            </div>
            <p className="w-[90%] lg:w-[60%] mx-auto text-center text-base leading-relaxed">At Book Vibe, we prioritize the privacy and security of our users. This Privacy Policy outlines how we handle information on our website. By accessing or using Book Vibe, you agree to the terms outlined in this Privacy Policy.</p>


            <h3 className="mt-6 mb-1 text-xl font-semibold">Information Collection</h3>
            <p className=" text-base font-medium text-gray-600 text-justify">Book Vibe does not collect any personal or non-personal information from users. Our website solely provides access to book details, reviews, summaries, and other relevant information sourced from authenticated external platforms like Google. Users can browse, read, and interact with book content without providing any personal information.</p>


            <h3 className="mt-6 mb-1 text-xl font-semibold">Book Interactions</h3>
            <p className=" text-base font-medium text-gray-600 text-justify">Users can explore book details, reviews, and summaries without creating an account or providing any personal information. Additionally, users can add books to their wishlist or mark them as read without any data collection on our end. These features are designed to enhance user experience without compromising privacy.</p>

            <h3 className="mt-6 mb-1 text-xl font-semibold">Sort and Visualization Features</h3>
            <p className="text-base font-medium text-gray-600 text-justify">Book Vibe offers sorting options for users to organize their reading lists based on ratings, number of pages, and published year. Additionally, users can visualize their reading progress through a custom bar chart that tracks the relationship between book names and the number of pages read. These features are implemented without collecting any user data.</p>

            <h3 className="mt-6 mb-1 text-xl font-semibold">Privacy and Security Measures</h3>
            <p className=" text-base font-medium text-gray-600 text-justify">We prioritize the security of user interactions on Book Vibe. While we do not collect personal information, we employ security measures to safeguard user privacy. Our website utilizes secure connections and encryption protocols to ensure data integrity and protect user interactions.</p>

            <h3 className="mt-6 mb-1 text-xl font-semibold">Changes to this Policy</h3>
            <p className="text-base font-medium text-gray-600 text-justify">Book Vibe reserves the right to update this Privacy Policy as necessary to reflect changes in our practices or legal requirements. We encourage users to review this Policy periodically for any updates. By continuing to use Book Vibe, users agree to the latest version of this Privacy Policy.</p>



            <p className="text-base font-medium text-black mt-6 text-justify">This Privacy Policy was last updated on 28 March, 2023.</p>

            <p className='mt-2 text-justify mb-10'>If you have any questions or concerns about this Privacy Policy or our practices, please contact us at <Link to='/contact' className='font-bold text-sky-600 hover:underline hover:text-lg'>Contact Page.</Link></p>

        </div>
    );
};

export default Privacy;