import React from 'react'
import EastIcon from '@mui/icons-material/East';
import { MainContext, useContext } from './useContext/context';

const SendMessageBox = () => {

  const {selectedChannelId , selectedFriendId , selectedChannel , selectedFriend} = useContext(MainContext);


  return (
    <div className="flex-wrap">
      {selectedChannelId !== -1 && (
      <div className="message-input w-full flex">
        <input
          type="text"
          placeholder={`${selectedChannel} kanalına mesaj gönder...`}
          className="p-2 rounded-md w-full"
          
          
        />
        <EastIcon className='mt-2 mr-4 cursor-pointer'  style={{width:'50px' , height:'40px' , margin:'5px'}}/>
      </div>
      )}
      {selectedFriendId !== -1 && (
      <div className="message-input w-full flex">
        <input
          type="text"
          placeholder={`${selectedFriend.userName} kullanıcısına mesaj gönder...`}
          className="p-2 rounded-md w-full"
          
          
          
        />
        <EastIcon className='cursor-pointer hover:bg-zinc-50 rounded-lg' style={{width:'50px' , height:'40px' , margin:'5px', backgroundColor:'gray', color:'white'}}/>
      </div>
      )}
    </div>
  )
}

export default SendMessageBox