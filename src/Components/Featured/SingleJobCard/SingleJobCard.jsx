import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';






const SingleJobCard = ({ job }) => {
    const {img, title, id, brand, job_category, job_type, location, salary} = job;

    
    
    return (
        <div className='border border-[#E8E8E8] rounded-lg mt-8 h-[360px] flex flex-col justify-center pl-10'>
            <div>
                <img className='w-[150px] h-[50px]' src={img} alt="" />
            </div>
            <div>
                <h4 className='text-[#474747] font-bold text-xl mt-6 mb-2'>{title}</h4>
                <p className='text-[#757575] mt-2 mb-3'>{brand}</p>
            </div>
            <div className='mb-4'>
                <button className="border border-[#7E90FE] px-4 py-2 mr-4 rounded-lg text-[#7E90FE]">{job_type}</button>
                <button className="border border-[#7E90FE] px-4 py-2 mr-4 rounded-lg  text-[#7E90FE]">{job_category}</button>
            </div>
            <div className='flex items-center'>
                <MapPinIcon className='h-6 w-6 text-[#757575]'/> <address className='mr-6'>{location}</address>
                <CurrencyDollarIcon className="h-6 w-6 text-[#757575]" /> <p>{salary}</p>
            </div>
            <div className='mt-6 mb-10'>
                <Link to={`../jobDetails/${id}`}><button className="btn capitalize hover:bg-[#5e3ba0] bg-[#9873FF] border-none">View Details</button></Link>
            </div>

            
        </div>
    );
};

export default SingleJobCard;