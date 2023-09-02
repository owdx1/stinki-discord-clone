import './App.css';
import SidebarGroups from './sidebar/SidebarGroups';
import SidebarFriends from './sidebar/SidebarFriends';
import {useState } from 'react';
import Partipicants from './Partipicants';
import Information from './Information';
import SendMessageBox from './SendMessageBox';
import ConversationBox from './ConversationBox';
import UserSettings from './UserSettings';
import RandomUserSettings from './RandomUserSettings';
import { MainContext } from './useContext/context';






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
      name:'group3',
      groupImgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtsiPSqo0kUGCW_VVRz4kkaLTLfQMFBpxrVg&usqp=CAU',
      enrolled:[1,2,3,4,5,6],
      channels:
      [
        {
          channelName:"bkkkos",
          channelId:7
        },
        {
          channelName:"keyjkjf",
          channelId:8
        },
        {
          channelName:"psdkjkjadsa",
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
const user = {   
  userId:6,
  userName:'currentUser',
  userImgUrl:'https://img.mensxp.com/media/content/2020/May/Sacrifices-Heath-Ledger-Made-To-Become-The-Joker1400_5eaff53aed896.jpeg'

}

function App() {
  const [selectedFriendId, setSelectedFriendId] = useState(-1);
  const [selectedGroupId, setSelectedGroupId] = useState(-1);
  const [selectedGroup , setSelectedGroup] = useState(groups[0]);
  const [selectedFriend, setSelectedFriend] = useState({});
  const [selectedChannelId, setSelectedChannelId] = useState(0);
  const [selectedChannel , setSelectedChannel] = useState("");
  const [isUserSettingsOn, setIsUserSettingsOn] = useState(false);
  const [isRandomUserSettingsOn, setIsRandomUserSettingsOn] = useState(false); 
  const [randomUserId , setRandomUserId] = useState(-1);


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
      setSelectedFriend(null);
      
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

  const data = {
    selectedFriend,
    selectedFriendId,
    selectedGroup,
    selectedGroupId,
    selectedChannel,
    selectedChannelId,
    isUserSettingsOn,
    setIsUserSettingsOn,
    isRandomUserSettingsOn,
    setIsRandomUserSettingsOn,
    randomUserId,
    setRandomUserId,
    allUsers,
    user,
    friends,
    groups
    
  }



  
  return (
    <MainContext.Provider value={data}>
      <div className='flex'>
        <div className='grid grid-cols-1 md:grid-cols-3  h-screen griddy'>
          <div className="col-span-1 md:col-span-1 h-full flex">
            <SidebarGroups handleSelectedGroupIdChange={handleSelectedGroupIdChange}/>
            <SidebarFriends  handleSelectedFriendIdChange={handleSelectedFriendIdChange}/>
          </div>

          <div className="col-span-1 md:col-span-1 h-full flex-1">
            <Information handleSelectedChannelIdChange={handleSelectedChannelIdChange}/>
          </div>


          <div className="col-span-1 md:col-span-1  h-full flex-1">
            <Partipicants/>
          </div>
          
        </div>
        <div className="h-full grid grid-rows-1 grid-cols-6 bg-white" style={{ width: '1050px', gridTemplateColumns: '1fr', height:'auto'}}>
          <div className="col-span-5">
            <ConversationBox/>
          </div>
          <div className="col-span-1 h-full">
            <SendMessageBox/>
          </div>
        </div>

        {isUserSettingsOn && <UserSettings/>}
        {isRandomUserSettingsOn && <RandomUserSettings/>}


      </div>
    </MainContext.Provider>
  );
}

export default App;