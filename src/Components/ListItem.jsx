const ListItem = ({ person, handleRemoveAppointment }) => {
    const { id, firstName, lastName, vacationPreference } = person;
    return(
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <img
                alt={vacationPreference === 'Beach' ? 'beach' : 'mountains'}
                height='46px'
                src={vacationPreference === 'Beach' ? 'beach.svg' : 'mountain.svg'}
            />
            <h1>{firstName} {lastName}</h1>
            <button className="btn btn-danger" onClick={() => handleRemoveAppointment(id)}>Remove</button>
        </div>
    )
}

export default ListItem;