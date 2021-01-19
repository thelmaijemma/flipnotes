import './App.css';
import React, {Component } from 'react';
import MainSidebar from './MainSidebar';
import { Route  } from 'react-router-dom';
import SideBar from './SideBar';
import Header from './Header';

class App extends Component() {
  render(){
  return (
    <div>
      <Header></Header>
    <SideBar>
      <Route path='/' component={MainSidebar} />
    </SideBar>
  </div>
  );
  }
}

export default App;


{/*    <Sidebar>
      <Route path='/' component={MainSidebar} />
      <Route path='/folder' component={SidebarFolders} />
      <Route path='/note' component={SidebarNotes} />
    </Sidebar>
    <Main>
      <Route path='/' component={MainMain} />
      <Route path='/folder' component={MainFolders} />
      <Route path='/note' component={MainNotes} />
    </Main> */}