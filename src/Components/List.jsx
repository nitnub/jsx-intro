import React from 'react';
import ListItem from './ListItem';
import ListInput from './ListInput';
import { Spacer } from './ListItem.styles';
import { ListContainer } from './List.styles';
import { data as initialData } from '../data';

const List = ({ showAppointments = false }) => {
    const [data, setData] = React.useState(initialData);

    const handleNewPerson = ({ firstName, lastName, vacationLocation, vacationPreference, meetingDate }) => {
        const lastId = data[data.length - 1].id;
        setData([...data, {
            id: lastId + 1,
            firstName,
            lastName,
            vacationPreference,
            vacationLocation,
            meetingDate,
        }])
    }

    const handleStateReset = (setFormState) => {
        setFormState({
            firstName: '',
            lastName: '',
            vacationPreference: '',
            vacationLocation: '',
            meetingDate: '',
        })
    }
    
    const handleRemoveAppointment = (id) => {
        const updatedData = data.filter((appt) => appt.id !== +id);
        console.log(updatedData, id);
        setData(updatedData);
    }

    return(
        <ListContainer>
            {showAppointments ?
                data?.map((person) => {
                    return (
                        <>
                        <ListItem
                            value={person.id}
                            handleRemoveAppointment={handleRemoveAppointment}
                            key={`${person.firstName}-${person.lastName}`}
                            person={person}
                        />
                        <Spacer mt={'10px'} />
                        </>
                    )
                }) :
                <ListInput handleNewPerson={handleNewPerson} handleStateReset={handleStateReset}/>    
            }
        </ListContainer>
    )
}

export default List;