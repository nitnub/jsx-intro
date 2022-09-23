import React from 'react'
import { render, screen } from '@testing-library/react'
import ListItem from '../Components/ListItem'
import '@testing-library/jest-dom'

const testPersonData = {
    firstName: "Patrick",
    lastName: "Kennedy",
    handleRemoveAppointment: () => true,
}

test('renders the ListItem component without failing', () => {
    render(<ListItem person={testPersonData} />);
    console.log(screen.getByRole('heading'));
    expect(screen.getByRole('heading')).toHaveTextContent('Patrick Kennedy');
});