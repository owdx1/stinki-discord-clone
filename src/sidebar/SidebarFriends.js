import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
//import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
//import { useState } from 'react';

// bu sayfaya arkadaşların bilgisi gelecek, bunun yanı sıra kullanıcı bilgisi de gelmeli

const friends = [
    {   
        userId:1,
        userName:'lkjlkjlkj',
        userImgUrl:'https://www.kahramangiller.com/wp-content/uploads/2016/08/joker-kapak.jpg'
    },
    {   
        userId:2,
        userName:'lkjlkj',
        userImgUrl:'https://i.dr.com.tr/cache/600x600-0/originals/0002016036001-1.jpg'
    },
    {
        userId:3,
        userName:'usernamess',
        userImgUrl:'https://postkolik.com/Images/News/c2b17c96-f6a0-4d43-b29b-43cc8ac5633a1140x610.jpg'
    },
    {
        userId:4,
        userName:'kllkk',
        userImgUrl:'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202212/joker-sixteen_nine.jpg?VersionId=sqkyj9IHimT9ltpwSPWjjUNw2tVbrS11'
    },
    {
        userId:5,
        userName:'jkljkj',
        userImgUrl:'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F09%2Ftw-dc-comics-joker-real-name-reveal-info.jpg?w=960&cbr=1&q=90&fit=max'
    }
]

const user = {   
        userId:6,
        userName:'currentUser',
        userImgUrl:'https://img.mensxp.com/media/content/2020/May/Sacrifices-Heath-Ledger-Made-To-Become-The-Joker1400_5eaff53aed896.jpeg'

}

const SidebarFriends = ({selectedFriendId , handleSelectedFriendIdChange}) => {
   
    
    return (

        <div className='fixed top-0 left-24 bg-gray-700 w-72 flex flex-col shadow-2xl text-white h-screen'>
            <div className="sidebar-name  font-extralight text-gray-50 w-full h-12 mt-0.5 flex justify-between ">
                <p className='text-center justify-center ml-10 my-auto align-middle' style={{fontSize:'20px'}}>Friends</p>
                <p className='mr-7 my-auto' style={{fontSize:'30px'}}> {`<`} </p>
            </div>
            
            <div className=''>
                {friends.map((friend,index) => {
                    const userName = friend.userName;
                    const url = friend.userImgUrl;
                
                return (
                    <div className="sidebar-icon-friends group" key={index}
                        onClick={() => handleSelectedFriendIdChange(friend.userId)}
                    
                    >
                        {selectedFriendId === friend.userId ? <div className="sidebar-selected w-2 h-6 bg-slate-100 right-4 relative rounded-r-3xl"></div> : (<></>) }
                        { url ? 

                            (<img 
                                src={`${url}`} 
                                alt={index}
                                className='w-14 h-14 object-cover rounded-3xl hover:rounded-xl fixed'
                            />) 
                            : 
                            (<PersonIcon className='fixed'/>)
                        }
                        <span className='sidebar-tooltip-friends'>
                            {userName}#{friend.userId}
                        </span>
                    </div>
                    
                    
                )})}
            </div>

            <div className="user-info-container flex items-center justify-between w-full h-32 bg-gray-800 absolute bottom-0 shadow-2xl overflow-hidden cursor-pointer hover:bg-slate-700">
                <div className="flex items-center space-x-4 px-4">
                    <img
                        src={user.userImgUrl}
                        alt={user.userName}
                        className="w-20 h-20 rounded-full object-cover hover:rounded-xl"
                    />
                    <div className="text-white">
                        <span className="text-lg border-none">
                            {user.userName}#{user.userId}
                        </span>
                    </div>
                    <SettingsIcon/>
                </div>
                
            </div>




        </div>
    )
}

export default SidebarFriends;