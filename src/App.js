import './App.css';
import SidebarGroups from './sidebar/SidebarGroups';
import SidebarFriends from './sidebar/SidebarFriends';
import { useEffect, useState } from 'react';
import DetailsIcon from '@mui/icons-material/Details';
import SettingsIcon from '@mui/icons-material/Settings';
import EastIcon from '@mui/icons-material/East';
import MenuIcon from '@mui/icons-material/Menu';
const groups = [
  {   
      groupId:1,
      name:'group_name',
      groupImgUrl:'https://i2-prod.mirror.co.uk/incoming/article11812659.ece/ALTERNATES/s1200/The-Feline-World-Gathers-For-The-Supreme-Cat-Show-2017.jpg',
      enrolled:[1,2,3,4,5,6,7,8],
      channels:
      [
        {
          channelName:"kanal1",
          channelId:1
        },
        {
          channelName:"kanal2",
          channelId:2
        },
        {
          channelName:"kanal3",
          channelId:3
        },
      
      ]
  },
  {   
      groupId:2,
      name:'group_name',
      groupImgUrl:'https://64.media.tumblr.com/tumblr_lvozdcKIoy1r4xjo2o1_500.gif',
      enrolled:[1,2,3,4,5,6],
      channels:
      [
        {
          channelName:"kanal4",
          channelId:4
        },
        {
          channelName:"kanal5",
          channelId:5
        },
        {
          channelName:"kanal6",
          channelId:6
        },
      
      ]
  },
  {
      groupId:3,
      name:'group_name',
      groupImgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtsiPSqo0kUGCW_VVRz4kkaLTLfQMFBpxrVg&usqp=CAU',
      enrolled:[1,2,3,4,5,6],
      channels:
      [
        {
          channelName:"kanal7",
          channelId:7
        },
        {
          channelName:"kanal8",
          channelId:8
        },
        {
          channelName:"kanal9",
          channelId:9
        },
      
      ]
  },
  {
      groupId:4,
      name:'group_name',
      groupImgUrl:'https://us.feliway.com/cdn/shop/articles/7_Reasons_Why_Humans_Cats_Are_A_Match_Made_In_Heaven-9.webp?v=1667409797',
      enrolled:[1,2,3,4,5,6],
      channels:
      [
        {
          channelName:"kanal10",
          channelId:10
        },
        {
          channelName:"kanal11",
          channelId:11
        },
        {
          channelName:"kanal12",
          channelId:12
        },
      
      ]
  },
  {
      groupId:5,
      name:'group_name',
      groupImgUrl:'https://cdn.theatlantic.com/thumbor/IWUdSAUpvEXjyyldGXryuKox-24=/294x0:2046x1314/1200x900/media/img/mt/2022/10/L1001814_1/original.jpg',
      enrolled:[1,2,3,4,5,6],
      channels:
      [
        {
          channelName:"kanal13",
          channelId:13
        },
        {
          channelName:"kanal14",
          channelId:14
        },
        {
          channelName:"kanal15",
          channelId:15
        },
      
      ]
  }
]
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

function App() {
  const [selectedFriendId, setSelectedFriendId] = useState(null);
  const [selectedGroupId, setSelectedGroupId] = useState(null);
  const [selectedGroup , setSelectedGroup] = useState(groups[0]);
  const [selectedFriend, setSelectedFriend] = useState({});
  const [selectedChannelId, setSelectedChannelId] = useState(0);
  const [selectedChannel , setSelectedChannel] = useState("");


  const handleSelectedFriendIdChange = (newSelectedFriendId) =>{
    if(selectedFriendId !== newSelectedFriendId){
      setSelectedFriendId(newSelectedFriendId);

      const currentFriend = friends.filter((friend) => friend.userId === newSelectedFriendId);
      setSelectedFriend(currentFriend[0]);


      setSelectedGroupId(-1)
      setSelectedChannelId(-1);
      setSelectedChannel(null);
      
    }
    
  }
  
  const handleSelectedGroupIdChange = (newSelectedGroupId) =>{
    if(selectedGroupId !== newSelectedGroupId){
      setSelectedGroupId(newSelectedGroupId);
      const currentGroup = groups.filter((group) => group.groupId === newSelectedGroupId);
      setSelectedGroup(currentGroup[0]);
      setSelectedFriendId(-1);
      setSelectedChannelId(-1);
      setSelectedChannel(null);
      
    }
  }

  const handleSelectedChannelIdChange = (channelId, channelName) => {
    if (selectedChannelId !== channelId){
      setSelectedChannelId(channelId);
      setSelectedChannel(channelName);
      
    } else {
      setSelectedChannel(null)
      setSelectedChannelId(-1)
      setSelectedFriendId(-1);
    }
  }



  useEffect(()=>{
    console.log('suanki friend' , selectedFriend);
  },[selectedFriend])

  useEffect(() =>{
    console.log(selectedChannel);
  },[selectedChannel])


  
  return (
    <div className='w-screen h-screen block'>
      <div className="sidebar-container flex relative">
        <SidebarGroups className="left-sidebar" selectedGroupId={selectedGroupId} handleSelectedGroupIdChange={handleSelectedGroupIdChange}/>
        <SidebarFriends selectedFriendId={selectedFriendId} handleSelectedFriendIdChange={handleSelectedFriendIdChange}/>

        <div className='w-64 fixed top-0 left-96 bg-zinc-600 h-full text-white'>
          

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
                alt={selectedFriend.groupId}
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
        
        {selectedGroupId !== -1 && 
        (

          <div className='w-72 h-full fixed top-0 right-0 bg-zinc-600'>
            <div className="sidebar-name  font-extralight text-gray-50 w-full h-4 mt-3">
                <p className='text-center justify-center m-auto'>Partipicants
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
      </div>
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

    </div>
  );
}

export default App;
