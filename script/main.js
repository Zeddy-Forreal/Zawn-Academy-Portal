// ───── ROLE TOGGLE ─────
let roles = document.querySelectorAll(".role");
roles.forEach((role) => {
    role.onclick = () => {
        roles.forEach((r) => r.classList.remove("active"));
        role.classList.add("active");
    };
});

// ───── LOGIN SUBMIT (demo loading state) ─────
let loginBtn = document.querySelector(".login");
let usernameInput = document.querySelector("#username");
let passwordInput = document.querySelector("#password");

loginBtn.onclick = () => {
    if (!usernameInput.value || !passwordInput.value) {
        [usernameInput, passwordInput].forEach((input) => {
            if (!input.value) {
                input.style.borderColor = "#9a3b3b";
                input.parentElement.animate(
                    [
                        { transform: "translateX(0)" },
                        { transform: "translateX(-6px)" },
                        { transform: "translateX(6px)" },
                        { transform: "translateX(0)" }
                    ],
                    { duration: 300 }
                );
            }
        });
        return;
    }

    loginBtn.classList.add("loading");
    // Demo only — replace with real auth call
    setTimeout(() => {
        loginBtn.classList.remove("loading");
    }, 1600);
};

// Reset red border on input
[usernameInput, passwordInput].forEach((input) => {
    input.addEventListener("input", () => {
        input.style.borderColor = "";
    });
});