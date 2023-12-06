import { screen, render } from '@testing-library/react'; // to render the reactdom
import UserForm from './UserForm';

test('it shows 2 inputs and a button', () => {
    render(<UserForm />);

    const inputs = screen.getAllByRole('textbox');
    const btn = screen.getByRole('button');

    expect(inputs).toHaveLength(2);
    expect(btn).toBeInTheDocument()
})

