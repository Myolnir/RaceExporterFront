import React from 'react';
import { List, Datagrid, TextField, ReferenceField, EditButton, Edit, SimpleForm, 
    ReferenceInput, TextInput, SelectInput, DisabledInput, LongTextInput,
    Create, Filter } from 'react-admin';


export const ActivityList = props => (
    <List {...props} title='List of user activities'>
        <Datagrid rowClick="edit">
            <TextField source="_id" />
            <TextField source="name" />
            <TextField source="distance" />
            <TextField source="type" />
            <EditButton />
        </Datagrid>
    </List>
);

export const ActivityEdit = props => (
    <Edit title={<ActivityTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="_id" />
            <ReferenceInput source="_id" reference="activities">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Edit>
);

export const ActivityCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="_id" reference="activities">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Create>
);

const ActivityTitle = ({ record }) => {
    return <span>Activity {record ? `"${record.title}"` : ''}</span>;
};


const ActivityFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Activity" source="_id" reference="activities" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);
