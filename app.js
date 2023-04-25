
const userMessages = [];

const userMessageForm = document.querySelector('form');
const userMessagesList = document.querySelector('ul');

function renderMessages() {
  let messageItems = '';
  for (const message of userMessages) {
    messageItems = `
      ${messageItems}
      <li class="message-item">
        <div class="message-name">
            <h4>${message.name}: </h4>
        </div>
        <p>${message.text}</p>
      </li>
    `;
  }

  userMessagesList.innerHTML = messageItems;
}

function formSubmitHandler(event) {
  event.preventDefault();
  const userMessageInput = event.target.querySelector('textarea');
  const messageImageInput = event.target.querySelector('input');
  const userMessage = userMessageInput.value;
  const messageName = messageImageInput.value;

  if (
    !userMessage ||
    !messageName ||
    userMessage.trim().length === 0 ||
    messageName.trim().length === 0
  ) {
    alert('Por Favor preencha todos os Campos!');
    return;
  }

  userMessages.push({
    text: userMessage,
    name: messageName,
  });

  userMessageInput.value = '';
  messageImageInput.value = '';

  renderMessages();
}

userMessageForm.addEventListener('submit', formSubmitHandler);