window.addEventListener('load', () => {
    // Check if the user is logged in
    if (!localStorage.getItem("loggedIn")) {
        // Redirect the user to the login page
        window.location.href = "login.html";
    }

    // Add event listeners and other code here
    document.getElementById("showLoginForm").addEventListener("click", () => {
        document.getElementById("loginForm").classList.remove("hidden");
        document.getElementById("registerForm").classList.add("hidden");
        document.getElementById("signOutButton").classList.add("hidden");
    });

    document.getElementById("showRegisterForm").addEventListener("click", () => {
        document.getElementById("registerForm").classList.remove("hidden");
        document.getElementById("loginForm").classList.add("hidden");
        document.getElementById("signOutButton").classList.add("hidden");
    });

    document.querySelector("#loginForm form").addEventListener("submit", async (event) => {
        try {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            const response = await fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();
            if (data.success) {
                window.location.href = "/Phaser Test.html"; // Redirect to the game page
                document.getElementById("signOutButton").classList.remove("hidden"); // Show the "Sign Out" button
            } else {
                alert("Incorrect username or password");
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    });

    document.querySelector("#registerForm form").addEventListener("submit", async (event) => {
        try {
            event.preventDefault();
            const username = document.getElementById("regUsername").value;
            const password = document.getElementById("regPassword").value;

            const response = await fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();
            if (data.success) {
                window.location.href = "/Phaser Test.html"; // Redirect to the game page
                document.getElementById("signOutButton").classList.remove("hidden"); // Show the "Sign Out" button
            } else {
                alert("Username already exists");
            }
        } catch (error) {
            console.error("Error during registration:", error);
        }
    });

    // Add event listener to the sign out button
    document.getElementById("signOutButton").addEventListener("click", async () => {
        try {
            const response = await fetch("/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({}),
            });

            const data = await response.json();
            if (data.success) {
                localStorage.removeItem("loggedIn"); // Remove the logged in flag from localStorage
                window.location.href = "/"; // Redirect to the login page
                document.getElementById("signOutButton").classList.add("hidden"); // Hide the "Sign Out" button
            } else {
                alert("Logout failed");
            }
        } catch (error) {
            console.error("Error during logout:", error);
        }
    });

});