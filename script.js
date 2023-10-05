// JavaScript for the improvements

// Get references to the close-sidebar button and the left pane
const closeSidebarButton = document.getElementById('close-sidebar');
const leftPane = document.querySelector('.left-pane');

// Add an event listener to the close-sidebar button
closeSidebarButton.addEventListener('click', () => {
    // Toggle the 'hidden' class to move the left pane in/out
    leftPane.classList.toggle('hidden');
});

// Add a new chat item when the new-chat button is clicked
const newChatButton = document.querySelector('.new-chat-button');
const chatList = document.getElementById('chat-list');

newChatButton.addEventListener('click', () => {
    const newChatItem = document.createElement('div');
    newChatItem.className = 'single-chat-item';
    newChatItem.innerHTML = `
        <div class="chat-icon"></div>
        <span class="chat-title">New Chat</span>
    `;
    chatList.appendChild(newChatItem);
});

// JavaScript for sending messages (you can implement this part as per your requirements)
const sendButton = document.getElementById('send-button');
const messageInput = document.getElementById('message-input');
const messagesSection = document.getElementById('messages');

sendButton.addEventListener('click', () => {
    const messageText = messageInput.value.trim();
    if (messageText !== '') {
        const messageCard = document.createElement('div');
        messageCard.className = 'message-card';
        messageCard.textContent = messageText;
        messagesSection.appendChild(messageCard);
        messageInput.value = '';
        messagesSection.scrollTop = messagesSection.scrollHeight;
    }
});
