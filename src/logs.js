// in src/users.js
import React from 'react';
import { List, Datagrid, TextField } from 'admin-on-rest';

export const UserList = (props) => (
    <List title="All logs" {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="description" />
        </Datagrid>
    </List>
);
