import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
//import { useState } from 'react';

// bu sayfaya grupların bilgisi gelecek, bunun yanı sıra yeni bir grup açma işlemi de buradan gerçekleşecek

const groups = [
    {   
        groupId:1,
        name:'group_name',
        groupImgUrl:'https://i2-prod.mirror.co.uk/incoming/article11812659.ece/ALTERNATES/s1200/The-Feline-World-Gathers-For-The-Supreme-Cat-Show-2017.jpg',
        enrolled:[1,2,3,4,5,6]
    },
    {   
        groupId:2,
        name:'group_name',
        groupImgUrl:'https://64.media.tumblr.com/tumblr_lvozdcKIoy1r4xjo2o1_500.gif',
        enrolled:[1,2,3,4,5,6]
    },
    {
        groupId:3,
        name:'group_name',
        groupImgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtsiPSqo0kUGCW_VVRz4kkaLTLfQMFBpxrVg&usqp=CAU',
        enrolled:[1,2,3,4,5,6]
    },
    {
        groupId:4,
        name:'group_name',
        groupImgUrl:'https://us.feliway.com/cdn/shop/articles/7_Reasons_Why_Humans_Cats_Are_A_Match_Made_In_Heaven-9.webp?v=1667409797',
        enrolled:[1,2,3,4,5,6]
    },
    {
        groupId:5,
        name:'group_name',
        groupImgUrl:'https://cdn.theatlantic.com/thumbor/IWUdSAUpvEXjyyldGXryuKox-24=/294x0:2046x1314/1200x900/media/img/mt/2022/10/L1001814_1/original.jpg',
        enrolled:[1,2,3,4,5,6]
    }
  ]

const SidebarGroups = ({selectedGroupId , handleSelectedGroupIdChange}) => {
    
    

            

    return (

        <div className='fixed top-0 left-0 bg-primary w-24 flex flex-col shadow-2xl text-white h-screen'>
            <div className="sidebar-name  font-extralight text-gray-50 w-full h-4 mt-3"><p className='text-center justify-center m-auto'>Groups</p></div>
            <div className=''>
                {groups.map((group,index) => {
                    const name = group.name;
                    const url = group.groupImgUrl;
                
                return (
                    <div className="sidebar-icon group" key={index}
                        onClick={() => handleSelectedGroupIdChange(group.groupId)}
                    
                    >
                        {selectedGroupId === group.groupId ? <div className="sidebar-selected w-2 h-6 bg-slate-100 right-11 relative rounded-r-3xl"></div> : (<></>) }
                        { url ? 

                            (<img 
                                src={`${url}`} 
                                alt={index}
                                className='w-14 h-14 object-cover rounded-3xl hover:rounded-xl fixed'
                            />) 
                            : 
                            (<PersonIcon className='fixed'/>)
                        }
                        

                        <span className='sidebar-tooltip group-hover:scale-100'>
                            {name}
                        </span>
                    </div>
                    
                    
                )})}
                <HorizontalRuleIcon className='splitter'/>
                <div className="sidebar-icon group">
                    <AddIcon/>
                    <span className='sidebar-tooltip group-hover:scale-100'>
                        Bir grup oluştur
                    </span>

                </div>
                  
            </div>
        </div>
    )
}

export default SidebarGroups;