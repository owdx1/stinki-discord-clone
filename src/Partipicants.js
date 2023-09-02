import React from 'react';
import { MainContext, useContext } from './useContext/context';

const Partipicants = () => {

  const {selectedFriend , selectedFriendId , selectedGroup , selectedGroupId, allUsers, setIsRandomUserSettingsOn, setRandomUserId } = useContext(MainContext);

  
  const handleParticipantClick = (userId) => {
    setRandomUserId(userId);
    setIsRandomUserSettingsOn(true)
  }
  return (
    <>
    

    {selectedGroup && selectedGroupId !== -1 && (
      <div className='h-full w-full  top-0 right-0 bg-zinc-700 overflow-hidden'>
        <div className="sidebar-name  font-extralight text-gray-50 w-full h-4">
            <p className='text-center justify-center m-auto mt-3'>Partipicants
            </p>
        </div>
        {selectedGroup.enrolled.map((partipicantId) => {
          const currentPartipicantArray = allUsers.filter((partipicant) => partipicant.userId === partipicantId);
          const currentPartipicant = currentPartipicantArray[0];
          return (
            <div className='sidebar-icon-participants' onClick={() => handleParticipantClick(currentPartipicant.userId)}>
              <img 
                  src={`${currentPartipicant.userImgUrl}`} 
                  alt={currentPartipicant.userId}
                  className='w-10 h-10 object-cover rounded-3xl hover:rounded-xl fixed'
              />
              <span className='sidebar-tooltip-friends'>
                {currentPartipicant.userName}#{currentPartipicant.userId}
              </span>
            </div>
        )})}
      </div> 
    )}
    {selectedFriend && selectedFriendId !== -1 && (
      <div className='h-full w-full  top-0 right-0 bg-zinc-700 overflow-hidden'>
        <div className="sidebar-name  font-extralight text-gray-50 w-full h-4">
            <p className='text-center justify-center m-auto'>Buraya ne koyacağımı bilmiyorum
            </p>
        </div>
        
      </div> 
    )}
  </>
  )
}

export default Partipicants