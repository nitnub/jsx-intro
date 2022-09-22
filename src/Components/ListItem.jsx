import { CardContainer, Spacer } from './ListItem.styles';

const ListItem = ({ person, value, handleRemoveAppointment }) => {
    const { firstName, lastName, vacationPreference } = person;
    return(
        <CardContainer isPink={vacationPreference === 'Beach'}>
            <img
                alt={vacationPreference === 'Beach' ? 'beach' : 'mountains'}
                height='46px'
                src={vacationPreference === 'Beach' ? 'beach.svg' : 'mountain.svg'}
            />
            <h1>{firstName} {lastName}</h1>
            <button className='btn btn-danger' value={value} onClick={(e) => handleRemoveAppointment(e.target.value)}>Remove Appt</button>
        </CardContainer>
    )
}

export default ListItem;