import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import DetailsIcon from '@mui/icons-material/Details';
import SettingsIcon from '@mui/icons-material/Settings';
import { MainContext, useContext } from './useContext/context';

const Information = ({handleSelectedChannelIdChange}) => {

    const {selectedFriend , selectedFriendId , selectedGroup , selectedGroupId , selectedChannelId} = useContext(MainContext);

    


  return (
    <div className='w-full top-0 left-96 bg-zinc-600 h-full text-white'>
          

        {selectedFriend && selectedFriendId !== -1 && (
        <div className="p-4 w-full h-full">
            <img
            src={selectedFriend.userImgUrl}
            alt={selectedFriend.userName}
            className="w-48 h-48 rounded-lg mx-auto object-cover"
            />
            <div className="text-center mt-2">
            <p className="text-xl">{selectedFriend.userName}</p>
            <p className='pt-5'>Şu tarihten itibaren üye: 1 Ocak 2023</p>
            </div>
            <div className="common-groups bg-zinc-500 w-full h-12 justify-between flex p-2 mt-10">
            <p className='pl-5 pt-0.5'>2 Ortak Sunucu</p>
            <MenuIcon className='mt-1 cursor-pointer'/>
            </div>
        </div>
        )}
                
                


        
        {selectedGroup &&  selectedGroupId !== -1 && (
        <div className='p-4 w-full h-full bg-zinc-600'>
            <img
            src={selectedGroup.groupImgUrl}
            alt={selectedGroup.groupId}
            className='w-48 h-48 rounded-lg mx-auto object-cover'
            />

            <div className="text-center mt-2">
            <p className="text-xl text-white">{selectedGroup.name}</p>
            </div>

            <div className="mt-4 text-white">
            <ul>
                {selectedGroup !== null && selectedGroup.channels.map((channel, index) => (
                    <li key={index}
                    className={`flex items-center justify-between mb-2 h-8 hover:text-gray-100 rounded-lg hover:bg-zinc-500 cursor-pointer focus:outline-none focus:ring focus:ring-violet-300 shadow-lg ${channel.channelId === selectedChannelId ? 'selected-channel' : ''}`}
                    onClick={() => handleSelectedChannelIdChange(channel.channelId , channel.channelName)}
                    >
                    <div className="flex items-center">
                    <DetailsIcon className='ml-2'/>
                    <span 
                        className='ml-2'
                        
                    >

                        {channel.channelName}
                    </span>
                    </div>
                    <SettingsIcon className='mr-2'/>
                </li>
                ))}
            </ul>
            </div>
        </div>
        )}

    </div>
  )
}

export default Information