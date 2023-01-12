
//passprotect

/*
var password; 
var pass1="knight"; 
password=prompt('Enter Password',' '); 
if (password==pass1) 
alert('Correct Password! Click OK to Enter!'); 
else { window.location="http://nikolarr.com/"; 
} 
*/

//chat bot

let responses = ["did you find the challange?", "just do your bit man...", "come on go and find it!", "this is boring..", "alright, move on.." ];

function submitMessage() {
  let inputField = document.getElementById("chatbot-input-field");
  let message = inputField.value;
  inputField.value = "";

  let messagesContainer = document.getElementById("chatbot-messages");

  let newMessage = document.createElement("div");
  newMessage.classList.add("chatbot-message");

  let newMessageContent = document.createElement("p");
  let messageText = document.createTextNode(message);
  newMessageContent.appendChild(messageText);
  newMessage.appendChild(newMessageContent);
  messagesContainer.appendChild(newMessage);

  let randomResponse = responses[Math.floor(Math.random() * responses.length)];

  let newResponse = document.createElement("div");
  newResponse.classList.add("chatbot-message");

  let newResponseContent = document.createElement("p");
  let responseText = document.createTextNode(randomResponse);
  newResponseContent.appendChild(responseText);
  newResponse.appendChild(newResponseContent);
  messagesContainer.appendChild(newResponse);
}

function handleKeyPress(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        submitMessage();
    }
}


//chatbot end

//folder open

  document.querySelector('#folder-icon').addEventListener('click', () => {
  document.querySelector('#id-book').classList.remove('inactive');
  document.querySelector('#folder-icon').classList.add('inactive');
  document.querySelector('#close-button').classList.remove('inactive');

 
}); 

document.querySelector('#close-button').addEventListener('click', () => {
  document.querySelector('#id-book').classList.add('inactive');
  document.querySelector('#close-button').classList.add('inactive');
  document.querySelector('#folder-icon').classList.remove('inactive');

}); 


document.querySelector('#folder-icon2').addEventListener('click', () => {
  document.querySelector('#folder02').classList.remove('inactive');
  document.querySelector('#close-button3').classList.remove('inactive');
  document.querySelector('#folder-icon2').classList.add('inactive');

 
}); 

document.querySelector('#close-button3').addEventListener('click', () => {
  document.querySelector('#folder02').classList.add('inactive');
  document.querySelector('#close-button3').classList.add('inactive');
  document.querySelector('#folder-icon2').classList.remove('inactive');

}); 

document.querySelector('#chat-icon').addEventListener('click', () => {
  document.querySelector('#chatbot-full').classList.remove('inactive');
  document.querySelector('#chat-icon').classList.add('inactive');

}); 

document.querySelector('#close-button2').addEventListener('click', () => {
  document.querySelector('#chatbot-full').classList.add('inactive');
  document.querySelector('#chat-icon').classList.remove('inactive');
}); 

