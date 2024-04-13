function openChatGPT() {
    window.location.href = "https://chat.openai.com/auth/login?sso";
}

document.getElementById("gpt").addEventListener("click", openChatGPT);
