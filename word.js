function openword() {
    window.location.href = 'https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fdocs.google.com%2Fdocument%2Fcreate%3Faddon_store&followup=https%3A%2F%2Fdocs.google.com%2Fdocument%2Fcreate%3Faddon_store&ifkv=ARZ0qKIBkIfol-MQryTM3BHR2zsS2F1duGM0m5tbZc3X3FaxFJFAO0dKHm38SFB5tvPV46P4JFaf6A&ltmpl=docs&osid=1&passive=1209600&service=wise&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-788040582%3A1712336670714327&theme=mn&ddm=0';
}

document.getElementById("word").addEventListener("click", openword);
