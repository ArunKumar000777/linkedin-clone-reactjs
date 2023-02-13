import PhotoIcon from '@mui/icons-material/Photo';
import YouTubeIcon from '@mui/icons-material/YouTube';
import DateRangeIcon from '@mui/icons-material/DateRange';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import dp from '../../assets/favicon.ico.jpg'

const PostformMiddle = () => {
    return (
        <div className='bg-primary-bg-color px-4 py-3 border'>
            {/* dp and input box container */}
            <div className='flex gap-2 '>
                <div>
                    <img src={dp} alt="dp" className='w-12 h-12 rounded-full object-cover'/>
                </div>
                <input type="text" placeholder="Start a post" className=' flex-grow  border-2 rounded-r-full rounded-l-full placeholder:text-gray-500 placeholder:pl-4'/>
            </div>
            {/* icons and name container */}
            <div className='flex justify-between mt-3'>
                <div className='flex items-center gap-1'>
                    <PhotoIcon style={{color:'rgb(55,143,233)'}}/>
                    <span className='text-sm'>Photo</span>
                </div>
                <div className='flex items-center gap-1'>
                    <YouTubeIcon style={{color:'rgb(95,155,65)'}}/>
                    <span className='text-sm'>Video</span>
                </div>
                <div className='flex items-center gap-1'>
                    <DateRangeIcon style={{color:'rgb(211,161,87)'}}/>
                    <span className='text-sm'>Event</span>
                </div>
                <div className='flex items-center gap-1'>
                    <NewspaperIcon style={{color:'rgb(225,103,69)'}}/>
                    <span className='text-sm'>Write article</span>
                </div>
            </div>
        </div>
    );
};

export default PostformMiddle;
