import './App.css';
import SidebarGroups from './sidebar/SidebarGroups';
import SidebarFriends from './sidebar/SidebarFriends';


function App() {
  
  return (
    <div className='w-screen h-screen block'>
      <div className="sidebar-container flex relative">
        <SidebarGroups className="left-sidebar"/>
        <SidebarFriends/>
        
        
      </div>

      
    </div>
  );
}

export default App;
