// Steps
// 1. pick one component to test
// 2. make a test file for the component (.test.js is the file extension)
// 3. import testing libraries and component to test
// 4. write a test, make sure each part works as expected
// 5. run test at the cmd line - npm run test

// jest - runs our tests and reports results
// jsdom - when you npm run test, it creates a fake browser environment in a node environment

import { screen, render, waitFor } from '@testing-library/react'; // to render the reactdom
import userEvent from '@testing-library/user-event'; // helps simulate user actions like event,click,type
import UserForm from './UserForm';
import { element } from 'prop-types';

// test('it should do something descriptive', () => {
//   render the component - if any props are there we can pass them(we should -- in case if u are filtering the file (press p))
//   find an element in it using screen
//   assertion - make sure the component behaves as expected, like updating state, UI change
// })


// Collection of 48 functions to find the elements

// screen.getByRole()
// screen.findByTitle()


// await waitFor(()=>{
// }) -- you give component some time to update its state before making assertion


//npx rtl-book serve roles-notes.js


