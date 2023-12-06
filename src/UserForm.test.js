import { screen, render } from '@testing-library/react'; // to render the reactdom
import UserForm from './UserForm';
import userEvent from '@testing-library/user-event';

test('it shows 2 inputs and a button', () => {
    render(<UserForm />);

    const inputs = screen.getAllByRole('textbox'); //get an array
    const btn = screen.getByRole('button');

    expect(inputs).toHaveLength(2);
    expect(btn).toBeInTheDocument()
})

test('it calls onUserAdd when the form is submitted', () => {
    const mock = jest.fn();
    render(<UserForm onUserAdd={mock} />)

    const nameInput = screen.getByRole('textbox', { name: /name/i })
    const emailInput = screen.getByRole('textbox', { name: /email/i });

    userEvent.click(nameInput)
    userEvent.keyboard('Darshan')

    userEvent.click(emailInput)
    userEvent.keyboard('Darsh@gmail.com')

    const btn = screen.getByRole('button');
    userEvent.click(btn);
    
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith({ name: "Darshan", email: 'Darsh@gmail.com' })
})