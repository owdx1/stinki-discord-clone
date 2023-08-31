import React, { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const sampleMessagesForGroupChats = [
  {
    content: "selam",
    sentBy: 3,
    sentTime:"16:42",
    sentDate:"August 31th"

  },
  {
    content: "asppp",
    sentBy: 6,
    sentTime:"16:42",
    sentDate:"August 31th"

  },{
    content: "s221",
    sentBy: 4,
    sentTime:"16:42",
    sentDate:"August 31th"

  },{
    content: "mesajmesajmesajöesaj",
    sentBy: 6,
    sentTime:"16:42",
    sentDate:"August 31th"

  },
]

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


const ConversationBox = ({selectedFriend , selectedGroup}) => {

  const [currentHeader, setCurrentHeader] = useState("");

  // to keep current header always up to date
  useEffect(() =>{
    setCurrentHeader(selectedFriend === null ? selectedGroup.name: selectedFriend.userName)
  } ,[selectedFriend , selectedGroup])


  return (
    <div className='w-full h-full bg-zinc-600'>
      <div className="header w-full h-20  bg-zinc-600 rounded-xl flex justify-between  hover:bg-zinc-400">
        <p className='h-full pt-3 pl-3 text-white text-4xl'>{currentHeader}</p>
        <MenuIcon className='pr-3 my-auto cursor-pointer h-full' style={{width:'60px', color:'white'}}/>
      </div>

      <ul className="message-container">
        {sampleMessagesForGroupChats.map((messageInfo) => {
          const currentUserId = messageInfo.sentBy;
          const content = messageInfo.content;
          const sentTime = messageInfo.sentTime;
          const sentDate = messageInfo.sentDate;

          const currentUserInfoArray = allUsers.filter((user) => user.userId === currentUserId);
          const currentUser = currentUserInfoArray[0];
          const url = currentUser.userImgUrl;
          const username = currentUser.userName;
          


        return (
          <li className="flex min-h-24 bg-zinc-600 mt-3 hover:bg-zinc-500">
            <div className="image-container flex justify-between w-28">
              <img
                src={url}
                key={currentUserId}
                className="w-14 h-14 object-cover rounded-3xl hover:rounded-xl my-auto ml-4 mr-24"
                alt="User Profile Image"
              />
            </div>

            <div className="date-username-message block whitespace-normal">
              <div className="user-name-date flex items-center">
                <p className="mr-3 my-auto text-2xl text-white">{username}</p>
                <p className="text-sm text-gray-300">{sentDate}</p>
                <p className="ml-2 text-sm text-gray-300">{sentTime}</p>
              </div>
              <div className="message-container mt-2">
                <p className="text-slate-100 mb-4">{content}</p>
              </div>
            </div>
          </li>




        )})}

      </ul>
      




    </div>
  )
}

export default ConversationBox