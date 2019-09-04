import React from 'react';
import { Admin, Resource } from 'react-admin';
import activitiesProvider from './dataProvider/activitiesProvider'
import { ActivityList } from './activities';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';
import authProvider from './authProvider';

const dataProvider = activitiesProvider('https://raceexporter.herokuapp.com');
const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider= { dataProvider } >
    <Resource name="activities" list={ActivityList} icon={UserIcon}/>
  </Admin >
  );
export default App;
