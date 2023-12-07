import { screen, render, within } from '@testing-library/react'; // to render the reactdom
import UserList from './UserList';
import userEvent from '@testing-library/user-event';


function renderComponent() {
    const users = [
        { name: "Darshan1", email: "d1@gmail.com" },
        { name: "Darshan2", email: "d2@gmail.com" },
    ]
    render(<UserList users={users} />)

    return { users }
}
// method1 to find the no.of rows -using testid
test('render on row per user', () => {
    const { users } = renderComponent()

    // screen.logTestingPlaygroundURL() - to open the html element in a tool - matcher suggetion tool
    const rows = within(screen.getByTestId("users")).getAllByRole('row');
    expect(rows).toHaveLength(2)

})
//method 2 - using plain html selector
test('render on row per user', () => {
    const users = [
        { name: "Darshan1", email: "d1@gmail.com" },
        { name: "Darshan2", email: "d2@gmail.com" },
    ]
    const { container } = render(<UserList users={users} />)
    const rows = container.querySelectorAll('tbody tr')
    expect(rows).toHaveLength(2)
})



test('it calls onUserAdd when the form is submitted', () => {
    const { users } = renderComponent()

    for (let user of users) {
        const name = screen.getByRole('cell', { name: user.name });
        const email = screen.getByRole('cell', { name: user.email });

        expect(name).toBeInTheDocument();
        expect(email).toBeInTheDocument()
    }
});