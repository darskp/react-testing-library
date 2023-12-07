import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/testing library/i);
  expect(linkElement).toBeInTheDocument();
});

test('can receive a new user and show it on a list', async () => {
  render(<App />);
  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });

  userEvent.click(nameInput);
  userEvent.keyboard('Darshan11');

  userEvent.click(emailInput);
  userEvent.keyboard('Darsh11@gmail.com');

  const button = screen.getByRole('button');
  userEvent.click(button);
  screen.debug()

  await waitFor(() => {
    const name = screen.getByRole('cell', { name: 'Darshan11' });
    const email = screen.getByRole('cell', { name: 'Darsh11@gmail.com' });
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  })
});
