<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Azalea Login and Sign Up</title>
    <link rel="stylesheet" href="/asset/login1.css">
</head>
<body>
    <div class="container">
        <div class="form-container">
            <form class="login-form" id="login-form">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required>
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required>
                <button type="submit" id="login-button">Log in</button>
                <p>Don't have an account? <a href="/signup">Sign up</a></p>
            </form>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
