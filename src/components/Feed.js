import React from 'react'
import SendToMobileIcon from '@mui/icons-material/SendToMobile';
import TvOutlinedIcon from '@mui/icons-material/TvOutlined';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import BookIcon from '@mui/icons-material/Book';
import WorkIcon from '@mui/icons-material/Work';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import OpacityIcon from '@mui/icons-material/Opacity';


const Feed = () => {
  return (
    <div className='relative rounded-md flex xs:flex-col items-center flex-shrink justify-between m-3 gap-10 bg-white z-30 p-10 text-3xl text-teal-600 overflow-x-scroll cursor-pointer'>
     <SendToMobileIcon />
     <TvOutlinedIcon />
     <AccountBalanceIcon />
     <RecordVoiceOverIcon />
     <NewspaperOutlinedIcon />
     <BookIcon />
     <WorkIcon />
     <FeedbackOutlinedIcon />
     <WhatshotIcon />
     <TipsAndUpdatesOutlinedIcon />
     <OpacityIcon />
     <ExpandMoreOutlinedIcon />
     

    </div>
  )
}

export default Feed