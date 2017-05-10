// in src/App.js
import React from 'react';
import EventIcon from 'material-ui/svg-icons/action/book';
import UserIcon from 'material-ui/svg-icons/social/group';
import { Admin, Resource, Delete } from 'admin-on-rest';
import myApiRestClient from './restClient';

import { EventList, EventEdit, EventCreate } from './resources/events';
import { UserList, UserEdit, UserCreate } from './resources/users';
import { TypeList, TypeEdit, TypeCreate } from './resources/types';
import { RouteList, RouteEdit, RouteCreate } from './resources/routes';
import { StopList, StopEdit, StopCreate } from './resources/stops';
import { LogList } from './resources/logs';

import Dashboard from './Dashboard';
import authClient from './authClient';


const App = () => (
    <Admin authClient={authClient} dashboard={Dashboard} restClient={myApiRestClient}>
        <Resource name="event" list={EventList} edit={EventEdit} create={EventCreate} remove={Delete} icon={EventIcon}/>

        <Resource name="route" list={RouteList} edit={RouteEdit} create={RouteCreate} remove={Delete} />
        <Resource name="stop" list={StopList} edit={StopEdit} create={StopCreate} remove={Delete} />

        <Resource name="type" list={TypeList} edit={TypeEdit} create={TypeCreate} remove={Delete} />
        <Resource name="log" list={LogList} />
        <Resource name="user" list={UserList} edit={UserEdit} create={UserCreate} remove={Delete} icon={UserIcon}/>
    </Admin>
);

export default App;
