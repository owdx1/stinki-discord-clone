import React from 'react'
const allUsers = [
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
    },
    {
        userId:6,
        userName:'currentUser',
        userImgUrl:'https://img.mensxp.com/media/content/2020/May/Sacrifices-Heath-Ledger-Made-To-Become-The-Joker1400_5eaff53aed896.jpeg'
    },
    {
        userId:7,
        userName:'bu arkadas değil',
        userImgUrl:'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F09%2Ftw-dc-comics-joker-real-name-reveal-info.jpg?w=960&cbr=1&q=90&fit=max'
    },
    {
        userId:8,
        userName:'bu da arkadas değil',
        userImgUrl:'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F09%2Ftw-dc-comics-joker-real-name-reveal-info.jpg?w=960&cbr=1&q=90&fit=max'
    }
  ]
const Partipicants = ({ selectedGroup , selectedGroupId , selectedFriend, selectedFriendId}) => {
  return (
    <>
    

    {selectedGroup && selectedGroupId !== -1 && (
      <div className='w-72 h-full w-full  top-0 right-0 bg-zinc-700 overflow-hidden'>
        <div className="sidebar-name  font-extralight text-gray-50 w-full h-4">
            <p className='text-center justify-center m-auto mt-3'>Partipicants
            </p>
        </div>
        {selectedGroup.enrolled.map((partipicantId) => {
          const currentPartipicantArray = allUsers.filter((partipicant) => partipicant.userId === partipicantId);
          const currentPartipicant = currentPartipicantArray[0];
        return (
          <div className='sidebar-icon-participants'>
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
    {selectedFriend && selectedFriend !== -1 && (
      <div className='w-72 h-full w-full  top-0 right-0 bg-zinc-700 overflow-hidden'>
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