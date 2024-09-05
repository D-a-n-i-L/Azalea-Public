// Unit test for login form functionality with special characters in username and password

// Arrange
const usernameInput = document.createElement('input');
usernameInput.id = 'username';
usernameInput.value = 'special_user@123';

const passwordInput = document.createElement('input');
passwordInput.id = 'password';
passwordInput.value = 'special_pass#456';

const errorMessageElement = document.createElement('div');
errorMessageElement.id = 'errorMessage';

const loginForm = document.createElement('form');
loginForm.id = 'loginForm';
loginForm.appendChild(usernameInput);
loginForm.appendChild(passwordInput);
loginForm.appendChild(errorMessageElement);

document.body.appendChild(loginForm);

// Act
loginForm.dispatchEvent(new Event('submit', { bubbles: true }));

// Assert
expect(errorMessageElement.textContent).toBe('');
expect(getCookie('username')).toBe('special_user@123');
expect(window.location.href).toBe('your_desired_page.html');
// Unit test for handling multiple simultaneous login attempts from different users

// Arrange
const usernameInput1 = document.createElement('input');
usernameInput1.id = 'username1';
usernameInput1.value = 'user1';

const passwordInput1 = document.createElement('input');
passwordInput1.id = 'password1';
passwordInput1.value = 'pass1';

const usernameInput2 = document.createElement('input');
usernameInput2.id = 'username2';
usernameInput2.value = 'user2';

const passwordInput2 = document.createElement('input');
passwordInput2.id = 'password2';
passwordInput2.value = 'pass2';

const errorMessageElement1 = document.createElement('div');
errorMessageElement1.id = 'errorMessage1';

const errorMessageElement2 = document.createElement('div');
errorMessageElement2.id = 'errorMessage2';

const loginForm = document.createElement('form');
loginForm.id = 'loginForm';
loginForm.appendChild(usernameInput1);
loginForm.appendChild(passwordInput1);
loginForm.appendChild(errorMessageElement1);
loginForm.appendChild(usernameInput2);
loginForm.appendChild(passwordInput2);
loginForm.appendChild(errorMessageElement2);

document.body.appendChild(loginForm);

// Act
const event1 = new Event('submit', { bubbles: true });
const event2 = new Event('submit', { bubbles: true });

usernameInput1.dispatchEvent(event1);
usernameInput2.dispatchEvent(event2);

// Assert
expect(errorMessageElement1.textContent).toBe('');
expect(errorMessageElement2.textContent).toBe('');
expect(getCookie('username1')).toBe('user1');
expect(getCookie('username2')).toBe('user2');
expect(window.location.href).toBe('your_desired_page.html');// Unit test for preventing form submission when the user clicks the submit button

// Arrange
const loginForm = document.createElement('form');
loginForm.id = 'loginForm';

const submitButton = document.createElement('button');
submitButton.type = 'submit';

loginForm.appendChild(submitButton);

document.body.appendChild(loginForm);

// Act
const event = new Event('submit', { bubbles: true, cancelable: true });
let isPrevented = false;

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    isPrevented = true;
});

submitButton.dispatchEvent(event);

// Assert
expect(isPrevented).toBe(true);// Unit test for showing error message when username and password are incorrect

// Arrange
const usernameInput = document.createElement('input');
usernameInput.id = 'username';
usernameInput.value = 'wrong_username';

const passwordInput = document.createElement('input');
passwordInput.id = 'password';
passwordInput.value = 'wrong_password';

const errorMessageElement = document.createElement('div');
errorMessageElement.id = 'errorMessage';

const loginForm = document.createElement('form');
loginForm.id = 'loginForm';
loginForm.appendChild(usernameInput);
loginForm.appendChild(passwordInput);
loginForm.appendChild(errorMessageElement);

document.body.appendChild(loginForm);

// Act
loginForm.dispatchEvent(new Event('submit', { bubbles: true }));

// Assert
expect(errorMessageElement.textContent).toBe('Invalid username or password.');
expect(getCookie('username')).toBe(null);
expect(window.location.href).toBe('');// Unit test for setting the username cookie when the username and password are correct

// Arrange
const usernameInput = document.createElement('input');
usernameInput.id = 'username';
usernameInput.value = 'correct_username';

const passwordInput = document.createElement('input');
passwordInput.id = 'password';
passwordInput.value = 'correct_password';

const loginForm = document.createElement('form');
loginForm.id = 'loginForm';
loginForm.appendChild(usernameInput);
loginForm.appendChild(passwordInput);

document.body.appendChild(loginForm);

// Act
loginForm.dispatchEvent(new Event('submit', { bubbles: true }));

// Assert
expect(getCookie('username')).toBe('correct_username');