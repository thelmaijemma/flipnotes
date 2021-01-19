import './App.css';
import React, {Component } from 'react';
import MainSidebar from './MainSidebar';
import { Route, Switch  } from 'react-router-dom';
import SideBar from './SideBar';
import Header from './Header';
import SidebarFolders from './SidebarFolders';
import Main from './Main';
import Note from './Note';
import FOLDERS from'./Folders';
import Notes from './Notes';


class App extends Component {
  render(){
  return (
    <div>
      <Header></Header>
    <SideBar>
      <Route exact path='/' component={MainSidebar} />
      <Route path='/folder/:folderId' 
      component={SidebarFolders} />
    </SideBar>
    <Main>
      <Route exact path='/' component={Main} />
      <Route path='/note/:noteId' 
      render={(routeProps) => 
        <Notes
        noteId= {FOLDERS.notes.find(n =>
        n.id === routeProps.match.params.noteId)}
     />
        }
      />
    </Main>
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