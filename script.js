body {
    font-family: Arial, sans-serif;
    background-color: #f0f4f8;
    margin: 0;
    padding: 20px;
}

#login-container, #main-container {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    max-width: 450px;
    margin: auto;
    transition: all 0.3s ease;
}

h1 {
    text-align: center;
    font-size: 2.5em;
    color: #007BFF;
    margin-bottom: 10px;
}

h2 {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
}

button {
    width: 100%;
    padding: 12px;
    margin: 10px 0;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1em;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #0056b3;
}

form {
    display: flex;
    flex-direction: column;
}

input[type="text"],
input[type="password"],
input[type="file"],
select {
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1em;
}

input[type="text"]:focus,
input[type="password"]:focus,
select:focus {
    border-color: #007BFF;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

#main-container {
    animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}