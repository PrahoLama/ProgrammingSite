// Selectează elementele relevante din HTML folosind metoda `document.querySelector`
const chatbotToggler = document.querySelector(".chatbot-toggler"); // Butonul de deschidere a chatbotului
const closeBtn = document.querySelector(".close-btn"); // Butonul de închidere a chatboxului
const chatbox = document.querySelector(".chatbox"); // Containerul pentru conversații
const chatInput = document.querySelector(".chat-input textarea"); // Intrarea pentru mesaje
const sendChatBtn = document.querySelector(".chat-input span"); // Butonul de trimitere a mesajelor

// Obiectul care conține perechi cheie-valoare pentru răspunsurile chatbotului
const responses = {
    
        "hello": "Hello! How can I help you?",
        "hi": "Hello! How can I help you?",
        "how are you": "I'm just a program, but I'm functioning properly. How can I help you?",
        "goodbye": "Goodbye! Have a great day!",
        "help": "Do you need assistance with a purchase?",
        "yes": "We are here to help you: Press 1 if you need help regarding a course purchase or Press 2 if you need to know how to purchase.",
        "1": "Purchase for what course?",
        "2": "Go to the homepage and scroll down to the pricing section, read and select a desired plan and press 'Buy'. Then, you will be redirected to the purchase page.",
        "thank you": "You're welcome! If you need further assistance, I'm here to help!",
        "thanks": "You're welcome! If you need further assistance, I'm here to help!"
    
};

// Funcția care creează un element 'li' pentru un mesaj de chat
const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi;
};

// Funcția care generează un răspuns la un mesaj dat de utilizator
const generateResponse = (userMessage) => {
    let response = "Îmi pare rău, nu înțeleg.";
    for (const pattern in responses) {
        if (userMessage.toLowerCase().includes(pattern)) {
            response = responses[pattern];
            break;
        }
    }
    return response;
};

// Funcția care gestionează trimiterea unui mesaj în chat
const handleChat = () => {
    const userMessage = chatInput.value.trim();
    if (!userMessage) return;

    chatInput.value = "";
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    setTimeout(() => {
        const response = generateResponse(userMessage);
        const incomingChatLi = createChatLi(response, "incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
    }, 600);
};

// Ascultă evenimentul de apăsare a tastei 'Enter' pentru trimiterea unui mesaj în chat
chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

// Ascultă evenimentul de clic pe butonul de trimitere a mesajului
sendChatBtn.addEventListener("click", handleChat);

// Ascultă evenimentul de clic pe butonul de închidere a chatboxului
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));

// Ascultă evenimentul de clic pe butonul de deschidere a chatbotului și schimbă clasa pentru afișarea acestuia
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
