import React from 'react'
import EastIcon from '@mui/icons-material/East';

const SendMessageBox = ({selectedChannelId, selectedFriendId, selectedChannel, selectedFriend}) => {
  return (
    <div className="flex">
        {selectedChannelId !== -1 && (
        <div className="message-input fixed bottom-0 w-full p-4 bg-gray rest justify-between flex align-middle ">
          <input
            type="text"
            placeholder={`${selectedChannel} kanalına mesaj gönder...`}
            className="w-full p-2 border border-gray-300 rounded-md"
            style={{background:'lightgray'}}
            
          />
          <EastIcon className='mt-2 mr-4 absolute right-4'/>
        </div>
        )}
        {selectedFriendId !== -1 && (
        <div className="message-input fixed bottom-0 w-full p-4 bg-gray rest justify-between flex align-middle ">
          <input
            type="text"
            placeholder={`${selectedFriend.userName} kullanıcısına mesaj gönder...`}
            className="w-full p-2 border border-gray-300 rounded-md"
            style={{background:'lightgray'}}
            
          />
          <EastIcon className='mt-2 mr-4 absolute right-4'/>
        </div>
        )}

        
      </div>
  )
}

export default SendMessageBox