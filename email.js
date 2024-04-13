function openEmail() {
    window.location.href = "https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ifkv=ARZ0qKJ-pjIwtT3Xt1ecmcDAxhzXYbDqTksjWFBN4ZizHGFg8JVqaY_PJp3qy7RoGRDWHTWP5oCH1Q&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-2029739432%3A1712188032305892&theme=mn&ddm=0";
}

document.getElementById("mail").addEventListener("click", openEmail);
