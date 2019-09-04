import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="_id" />
            <TextField source="name" />
            <EmailField source="distance" />
            <TextField source="type" />
        </Datagrid>
    </List>
);
