import React, { useEffect, useState } from 'react';

const RandomUserSettings = ({ isRandomUserSettingsOn , setIsRandomUserSettingsOn , allUsers , randomUserId}) => {
    const [currentUser , setCurrentUser] = useState({});

    
  const closePopup = () => {
    setIsRandomUserSettingsOn(false);
  };

  useEffect(() => {
    const currentUserArray = allUsers.filter((user) => randomUserId === user.userId);
    const currentUser = currentUserArray[0];
    setCurrentUser(currentUser);

  } , [randomUserId])

  





  return (

      
    <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-black opacity-30" onClick={closePopup}></div>
        <div className="bg-white w-96 h-80 p-4 rounded shadow-lg relative z-50">
        <button
            type="button"
            onClick={closePopup}
            className="absolute top-2 right-2 text-xl text-gray-600 hover:text-gray-800 focus:outline-none"
        >
            &times;
        </button>
        <img src={currentUser.userImgUrl} alt="User Image" className="w-32 mx-auto mb-4" />
        <h2 className="text-xl font-semibold">{currentUser.userName}</h2>
        <p className="text-gray-500">User ID: {currentUser.userId}</p>
        </div>
    </div>
      
  );
};

export default RandomUserSettings;
