// Contribution guidelines
// Update the app version, update the lastUpdated
// If adding a new command, make sure to add it in the help command description as well.


// TODO:
// Extract out the big elements in a new js page (maybe move all the constants)
// Terminal size should increase along with the text
// Add some intelligence to support minor mistakes from the users
// Maybe add a command say something to just say something random
// Command: whoami, work experience, hobby, area of interests (interest), sports, achievements
// We may want to have blinking pointer in the input as well when it is in focus
// Maybe add the introductory resultPara also comes as part of the typing style
// Mayve we need to iterate the content of `codeInputField` as well
// Instead of Type here, we can just use a cursor blink
// Support Mobile version as well
// const typableContent = 'To get started; type help and press Enter (Or click RUN)'; -> add a button
// Make responses more interesteing, Eg: Oops!! invalid command, here's what you can ask for:
// Cursor is not pointing properly when printing command
// If the pragraph is too long, pretty print it, in the sense the print width should be fixed for each line
// Explore keeping the input field empty, just the cursor for newSection.
// In projects, we may want the user to give input either project name or serial number. For this, we may have to initialize some variable to identify that we are in a specific page (eg: projects, etc)
// implement the function to take care of typos and other errors, if any.
// Add a hyperlink to urls, and see how they can be done realtime.
// Implement the javascript as module, so that we can extract out the functions into libraries
// Implement terminal, bash, zsh, shell, fish, etc
// Implement a secret command for curiosity -> maybe a way to inform users about the hidden commands.
// Inform users that the terminal currently supports single word commands only
// Implement command: hi


// IMPORT the constants -> this doesn't work because of CORS issue, needs debugging
// import { RESUME_URL, LINKEDIN_URL} from './appConstants.js';

// CONSTANTS
const appVersionString = "1.1.18";
const lastUpdated = "February 20th, 2023 15:55";
const RESUME_URL = "https://bit.ly/ResumePratham";
const LINKEDIN_URL = "https://linkedin.com/in/pratham567";
const GITHUB_URL = "https://github.com/Pratham567";

// Commands, yet to be added
// projects, clear, new, man, home, date, sudo (not allowed), technical skills, secret
// TODO: yet to implement this feature
// Fixed output command
const fixedCommand = ['help', 'linkedin', 'clear', 'resume'];
// Typed command
const iteratableResultCommand = ['bio', 'man', 'projects', 'home', 'sama'];
// Special cases
// projects, sama, whoami, cd

const allSupportedCommands = "help, resume, bio, linkedin, random, github, contact, date. But don't try to gain access by running commands like sudo";
const commandsComingSoon = "These commands will come soon: projects, sama, clear, new, man, home"

// club commands based on results
const specialCmds = ['sama', 'projects'];
const debugCmds = ['h'];
const resumeCmds = ['resume', 'biodata', 'cv'];
const bioCmds = ['bio', 'about', 'biography', 'info', 'intro'];
const contactCmds = ['contact', 'email'];
const linkedInCmd = ['linkedin'];
const githubCmd = ['github'];
const randomCmds = ['random'];
const blockedCmds = ['sudo', 'root', 'su', 'admin', 'superuser', 'shutdown', 'reboot', 'restart', 
                     'patch', 'update', 'daemon', 'systemctl', 'edit', 'modify'];
const dateCmds = ['date', 'time'];

// Prefixes
const failedResultPrefixActionWords = ['Oops', 'Ahh', 'Oh no', "I'm sorry",
                                       'Apologies', 'Whoops', 'Uh-oh',
                                       "That's bad", 'Yikes', 'Oh boy',
                                       'Dang', 'Pardon', 'Shoot',
                                       "Geez", "My bad", "Bummer", "Oh dear",
                                       "Drat", "Alas", "Aw man", "Rats",
                                       "Well, that's not good", "Oh gosh",
                                       "Sorry about that", "Fiddlesticks",
                                       "Oopsie daisy", "Darn it", "Ouch",
                                       "Mea culpa", "How unfortunate"
                                      ];

const failedResultPrefix = ["this command is not possible",
                            "this is invalid",
                            "this seems incorrect",
                            "that seems invalid",
                            "this is an invalid request",
                            "this is incorrect",
                            "this cannot be done",
                            "this command cannot be executed",
                            "that's not a valid option",
                            "that's an invalid request",
                            "that's not allowed",
                            "this action is not permitted",
                            "this request is not recognized",
                            "that's not a valid input",
                            "I can't do that",
                            "the command is not available yet",
                            "the system is unable to process that request",
                            "the request is not supported",
                            "the request is not possible at this time",
                            "that's not a valid operation",
                            "I'm afraid I can't comply with that request",
                            "that's an unrecognized command",
                            "I cannot recognize that command",
                            "I cannot recognize the request",
                            "I cannot fulfill that command",
                            "I cannot fulfil that request",
                            "that's not a valid choice",
                            "that's not a valid selection",
                            "that's not a supported option",
                            "that's not a valid command",
                            "I don't understand the request",
                            "I don't understand the command",
                            "the input is not recognized",
                            "the input is not valid",
                            "the input is incoorect",
                            "the input cannot be processed",
                            "the request is not feasible",
                            "the request is not allowed",
                            "the request is not permitted",
                            "that's not a valid request",
                            ];

const greetKeyword = ['Hello (English)', 'Bonjour (French)', 'Guten Tag (German)', 'Ciao (Italian)',
                      'Hola (Spanish)', 'Salut (Romanian)', 'Hallo (Dutch)', 'Hej (Swedish)', 'Olá (Portuguese)',
                      'Ni hao (Mandarin Chinese)', 'Konnichiwa (Japanese)', 'Annyeonghaseyo (Korean)',
                      'Salaam (Arabic)', 'Shalom (Hebrew)', 'Namaste (Hindi)', 'Sawubona (Zulu)',
                      'Jambo (Swahili)', 'Ayubowan (Sinhala)', 'Marhaba (Moroccan Arabic)', 'Saluton (Esperanto)'
                    ];

// command outputs
const helpCmdPrefixList = ["Try one of the following commands",
                           "Only the following commands are permitted",
                           "You can only use either of the following commands",
                           "You can only use one of the following commands",
                           "Please use either of the following commands",
                           "Only the following requests are allowed",
                           "Only the following commands are allowed",
                           "Request will only be processed for the following commands",
                           "Request will only be processed for the following options",
                           "Use either of the following options",
                           "I can only responsed to the following commands",
                           "I can only answer to the following commands",
                           "Please choose one of the following commands",
                           "You are only permitted to use one of the following commands",
                           "You can use the following commands",
                           "Only the following requests will be processed",
                           "These are the only commands that are allowed",
                           "You may only choose from the following options",
                           "The following commands are the only ones that will be recognized",
                           "The system will only respond to the following commands",
                           "These are the only valid commands",
                           "The following commands are the only ones that will work",
                           "The following commands are supported",
                           "The following options are available",
                           "Please choose from the following authorized commands",
                           "These are the only acceptable commands",
                           "Please use one of the following valid options",
                           "The system will only accept the following requests",
                           "These are the only commands that will be recognized by the system",
                           "Only the following inputs will be processed by the system",
                           "The following commands are the only ones that will be executed",
                           "The following commands are the only ones that are currently available",
                           "The system can only respond to the following authorized commands",
                           "Only the following actions are allowed",
                           "The following actions are the only ones that will be allowed",
                           "These are the only permissible commands for this operation",
                           "These are the only commands that the system is configured to handle",
                           "Please use one of the following supported commands",
                           "The following actions are the only ones that will be processed",
                           "The system recognizes only the following commands",
                           "The system will only respond to the following authorized inputs",
                           "Only the following operations are allowed in this context",
                           "Please use one of the following available commands",
                           "The following commands are the only ones that will result in successful processing",
                           "These are the only commands that are currently supported",
                           "Please choose from the following list of available commands",
                           "Only the following inputs will result in successful processing",
                           "These are the only commands that will be processed by the system",
                           "Only the following requests will be processed",
                           "The following commands are the only ones that will work",
                           "These are the only commands that will be processed successfully by the system",
                          ];

const bioResult = "Pratham is a software developer currently working at Cisco 5G team. He builds highly scalable distributed network applications using some of the best industry practices when it comes to managing and monitoring those applications. \
                  He has experience in building common libraries so that the developers can focus more on business logic, avoid code duplication and develop faster. \
                  He has also built highly distributed pipelines for efficient testing and deployments. \
                  He is fascinated by Cloud and Data. Cyber Security takes up most of his free time. If you are into security, you'll vibe :p";

const resumeResult = "Thanks for the query. Get my resume here: " + RESUME_URL + ". Hold on, opening in a new tab. Please check if the pop-ups are not blocked";

const contactResult = "Pratham is reachable at: go4pratham0897@gmail.com. You maybe be looking for the following commands: linkedin, github, about";

const linkedInResult = "Connect with Pratham on LinkedIn here: " + LINKEDIN_URL + ". Hold on, opening in a new tab. Please check if the pop-ups are not blocked";

const githubResult = "Most of the Pratham's contribution goes to github enterprise, hence they may not be visible in his public profile. Here is Pratham's github url: " + GITHUB_URL + ". Hold on, opening in a new tab. Please check if the pop-ups are not blocked";

const blockedCmdResultList = ["I cannot let you run that",
                              "There's no way I can let you run that",
                              "Nice try, but I can't let that happen",
                              "That's not something I can allow",
                              "I'm sorry, but I can't let you do that",
                              "I'm afraid I can't authorize that action",
                              "I can't give you permission to do that",
                              "Unfortunately, that operation is not permitted",
                              "Access denied. That action cannot be executed",
                              "That request cannot be authorized at this time",
                              "Sorry, that action is restricted",
                              "I'm sorry, but I cannot grant you the necessary access to do that",
                              "That operation is outside the scope of your authority",
                              "I'm sorry, but that action goes beyond the limits of what I can permit",
                              "I'm sorry, but that action is not permitted for you",
                              "I'm afraid I cannot comply with that request",
                              "I'm sorry, but that request cannot be processed",
                              "I'm sorry, but I don't have the authority to permit that",
                              "I'm afraid I cannot execute that",
                              "That request is not possible given the current system configuration",
                              "I'm sorry, but that feature is not permitted at this time",
                              "Unfortunately, that action is not allowed by this system",
                              "I'm afraid I cannot grant you the necessary permissions to do that",
                              "That request goes beyond the scope of current user",
                              "I'm sorry, but that action is prohibited",
                              "Access to that function is restricted for security reasons",
                              "I'm afraid that action is beyond the scope of current user",
                              "I'm sorry, but that action cannot be performed for technical reasons",
                              "I'm afraid I cannot comply with that request due to system restrictions",
                              "I'm sorry, but that request cannot be fulfilled due to system constraints"
                            ];

const randomResultList = ["Pratham has a bachelors degree in Chemical Engineering.",
                          "Pratham has won the President's Gold Medal Award for his all round performance and his contributions to the department/college/society..",
                          "Pratham has travelled to 3 different countries.",
                          "Pratham has been very active in sports and have won multiple medls during college and holds records like maximum push-ups, maximum pull-ups in a go.",
                          "Pratham has learnt development by himself.",
                          "Pratham has a deep interest in cybersecurity, specially in reverse engineering.",
                          "Pratham files taxes by himself.",
                          "Pratham has won medals in body-building competitions.",
                          "Pratham like to eat neew things, but he's vegetarian.",
                          "Pratham's favourite fruit is apple.",
                          "Please try again....",
                          "Pratham believes in giving back to the society, hence he has been part of various social initiatives in college.",
                          "Pratham has volunteered with Robinhood Army.",
                          "Pratham has published a research paper on biofuel production from wheat straw in pre-final year of his bachelor's.",
                          "Pratham has been a student mentor in his college.",
                          "Pratham, along with a few other Alumni of IITR, has developed Alumni Mentorship Program for the benefit of current students of IIT.",
                          "Pratham loves to travel.",
                          "Pratham dreams of having a Vanity Van one day.",
                          "Pratham dreams of setting up a Research and Development Lab in India.",
                          "Pratham wants to stay in India in long term.",
                          "For Pratham, job quality matters more than money.",
                          "Pratham has refused offers from big companies like Amazon, Oracle....",
                          "Pratham loves to reach technical blogs, not he doesn't want to go for higher studies.",
                          "Prtham's friend call hin: SAMA.",
                          "Pratham likes to play badminton.",
                          "Pratham was part of team Athletics of IIT Roorkee.",
                          "Pratham has run marathon since he was in first year at college.",
                          "Pratham can write code in multiple languages.",
                          "This website was developed by Pratham, just for fun.",
                          "Pratham believes more in long term investment than short term swings.",
                          "Pratham can talk about sports, finance, life, games, cars.",
                          "Pratham is reachable at: go4pratham0897@gmail.com",
                          "This website doesn't use AI, but may use in future.",
                          "Pratham was awarded Student of the Year Award in his pre-final year of bachelors.",
                          "Pratham has won Heritage Award for all-round excellence award back-to-back for 3 consecutive years.",
                          "Pratham has won Special Contribution to the Department Award for consecutive 2 years.",
                          "Pratham was an Undergraduate Teaching Assistant in his college, supporting freshers with a smooth transition to their college life.",
                          "The first book Pratham purchased for his interest was: Computer Networks: A top down approach.",
                          // "Out of interest, Pratham has read over 5 technical books and counting...",
                          "Pratham prefer Microservices over Monoliths.",
                          "Pratham prefers backend over frontend.",
                          "Pratham can build CICD pipelines from scratch.",
                          "Pratham can develop highly scalable, high throughput applications.",
                          "Pratham can build asynchronous servers.",
                          "Pratham can design and develop a production grade product, including microservices, libraries, testing pipelines, deployment, etc.",
                          "Pratham is not active on Social Media."
                        ];



// // Setting up the context
// Create a new element and push the chars one at a time and finally add a new line
const cursor = document.createElement('span');
cursor.innerHTML = '_';
cursor.className = 'cursor blink';

// Get result Para and executedCommandPara
let resultPara = document.getElementById('resultParaId');
let executedCommandPara = document.getElementById('executedCommandPara');

// Definition of a newSection, to be used repeatedly
let newSection = document.createElement('section');
newSection.id = 'newSection'
newSection.className = 'container';
newSection.display = 'none';

// Add newSection as a sibling of initialSection
let initialSection = document.getElementById('initialSection');
initialSection.parentNode.appendChild(newSection);

// Get the node which has the get started statement.
const getStartedPara = document.getElementById('getStartedNode');

// input Command Strip, set the keyup event for ENTER key
let inputCommandStrip = document.getElementById('inputCommandStrip')
const codeInputField = 'codeInputField'
let inputBlock = document.getElementById(codeInputField);
inputBlock.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    executeCommand(inputBlock.value);
    // document.getElementById("id_of_button").click();
  }
});


// // Main Call starts here;
setBackgroundColor();
const getStartedNode = getTypeableNodeContent('getStartedNodeId');

// Set the version
setAppVersion();

/**
 * Sets the appVersion in the terminal header
 */
function setAppVersion(){
  var terminalHeadVersionChild = getLastTextChildNode(document.getElementById("terminalHead"));
  var terminalHeaderString = " cat ./about.txt(v" + appVersionString + ")";
  terminalHeadVersionChild.textContent = terminalHeaderString;
}

/**
 * Highlights the inputCommandStrip area and moves the focus of the pointer to it.
 */
function highlightCodeInputField(){
  document.getElementById(codeInputField).focus();
  document.getElementById(codeInputField).select();
}

/**
 * set background color gradient
 */
function setBackgroundColor(){
  const angle = Math.round(Math.random() * 30) + 10;
  const hue = Math.round(Math.random() * 255);
  const colorA = `HSL(${hue}, 80%, 70%)`;
  const colorB = `HSL(${hue - 255 / 2}, 80%, 70%)`;
  document.body.style.background = `linear-gradient(${angle}deg, ${colorA}, ${colorB})`;

}

/**
 * Fetches the iteratable content from the given NodeId
 * @params takes in the nodeID
 * @returns returns a list of a node which is to be iterated.
 */
function getTypeableNodeContent(nodeId){
  const p = document.getElementById(nodeId);
  const node = p.childNodes[p.childNodes.length - 1];
  // replace multiple spaces with a single space
  node._saved = node.textContent.replace(/ {2,}/g, ' ').trim();
  node.textContent = '';
  return node;
}

/**
 * prints the content of the node char by char with blinking cursor
 * @param {node} node
 */
function printResultCharByChar(node, charPrintWaitTime=140, cmd) {

  cursor.className = 'cursor blink';
  node.parentNode.appendChild(cursor);

  itrIndex = 0;
  const i = setInterval(() => {

    if (!node || itrIndex == (node._saved.length+1)) {
      clearInterval(i);
      return;
    }

    node.textContent = node._saved.slice(0, itrIndex);

    if (itrIndex == node._saved.length) {
      cursor.className = 'cursor blink';
      appendInputStrip(node, 1000, cmd);

    } else {
      node.parentNode.appendChild(cursor);
      cursor.className = 'cursor';
    }
    itrIndex++;

  }, charPrintWaitTime);

  // console.log("Debug: ending printResultCharByChar");
}


function appendInputStrip(node, delay, cmd){
  setTimeout(() => {
    cursor.className = 'cursor blink';
    inputBlock.appendChild(cursor)
    node.parentNode.appendChild(inputCommandStrip);
    inputCommandStrip.style.display = "block";
    if(cmd.includes('random')){
      inputBlock.value='random';
    }
    else{
      inputBlock.value='help';
    }
    highlightCodeInputField();
  }, delay);

}

function printResultAndAppendinputCommandStrip(node, printSpeed, cmd=''){
  printResultCharByChar(node, printSpeed, cmd);
}


setTimeout(function() {
  printResultAndAppendinputCommandStrip(getStartedNode, 50);
}, 2000);


/**
 * A function that clears all the child nodes of a node.
 * @param {*} inputNode 
 * @return void
 */
function clearAllChildNodes(inputNode) {
  var child = inputNode.lastElementChild; 
  while (child) {
      inputNode.removeChild(child);
      child = inputNode.lastElementChild;
  }
}

/**
 * A function that removes the given child node ID node of a parent.
 * @param {node, String} inputNode, childID
 * @return void
 */
 function clearChildNode(parentNode, childId) {
  var child = document.getElementById(childId);
  parentNode.removeChild(child);
}

/**
 * Function to interpret the inputCommand and take action
 * @param {string} cmd 
 * @returns void
 */
function executeCommand(cmd='help'){

  cmd = cmd.toLowerCase();
  // TODO: input validate the cmd, maybe check for special chars, etc.

  // hide old section
  initialSection.style.display = 'none';
  //display newSection
  newSection.style.display = 'block';
  // clear all child nodes of newSection, it will be taken care later;
  clearAllChildNodes(newSection);
  
  let resultText = getResultText(cmd);

  updateExecutedCommandPara(cmd);
  displayResultOfCommand(resultText, cmd);
  takeCmdRelatedAction(cmd);
}

function getLastTextChildNode(parentNode){
  return parentNode.childNodes[parentNode.childNodes.length - 1];

}

function getResultText(cmd){
  
  let resultText =  getRandomElement(greetKeyword) + "! ";
  var helpResultText = getRandomElement(helpCmdPrefixList) + ": " + allSupportedCommands + ". " + commandsComingSoon;
  if(specialCmds.includes(cmd)){
    resultText += 'This is a special command. Coming soon.....';
  }
  else if (debugCmds.includes(cmd)){
    resultText = "You have entered the debug section. Please type help and proceed ahead....";
  }
  else if (cmd == 'help'){
    resultText += helpResultText;
  }
  else if (bioCmds.includes(cmd)){
    resultText += "Here's a quick info about Pratham. " + bioResult;
  }
  else if (contactCmds.includes(cmd)){
    resultText += contactResult;
  }
  else if (resumeCmds.includes(cmd)){
    resultText += resumeResult;
  }
  else if (linkedInCmd.includes(cmd)){
    resultText += linkedInResult;
  }
  else if(githubCmd.includes(cmd)){
    resultText += githubResult;
  }
  else if (randomCmds.includes(cmd)){
    resultText += "Here's a fact about Pratham. " + getRandomElement(randomResultList);
  }
  else if (dateCmds.includes(cmd)){
    resultText += "The current Date-Time Stamp is: " + getPrettyDateTime();
  }
  else if (blockedCmds.includes(cmd)){
    resultText = getRandomElement(failedResultPrefixActionWords) + "! " + getRandomElement(blockedCmdResultList) + ".";
  }
  else {
    // default result, output of help
    resultText = getRandomElement(failedResultPrefixActionWords) + ", ";
    resultText += getRandomElement(failedResultPrefix);
    resultText += `. ` + helpResultText;
  }
  return resultText;

}

/**
 * Return a random element of the given list
 * @param {object} listOfElement 
 * @returns {object}
 */
function getRandomElement(listOfElement){
  return listOfElement[Math.floor(Math.random()*listOfElement.length)];
}

/**
 * This function performs any special action required for the given command.
 * This is executed as the command result is being displayed to the user.
 * @param {String} cmd 
 */
function takeCmdRelatedAction(cmd){

  if (resumeCmds.includes(cmd)){
      setTimeout(function() {
        window.open(RESUME_URL, "_blank");
      }, 4000);
  }
  else if (linkedInCmd.includes(cmd)){
    setTimeout(function() {
      window.open(LINKEDIN_URL, "_blank");
    }, 4000);
  }
  else if (githubCmd.includes(cmd)){
    setTimeout(function() {
      window.open(GITHUB_URL, "_blank");
    }, 4000);
  }

}

function updateExecutedCommandPara(cmd){
  let rcmd = "Executed Command: " + cmd;;
  let lastEl = getLastTextChildNode(executedCommandPara);
  lastEl.textContent = rcmd;

}

/**
 * clear newSection and append resultPara and inputCommandStrip
 * @param {string} result 
 */
function displayResultOfCommand(resultText, cmd){

  // Clear inputCommandStrip from resultPara
  if (resultPara.contains(inputCommandStrip)){
    resultPara.removeChild(inputCommandStrip);
  }

  newSection.appendChild(executedCommandPara);
  newSection.appendChild(resultPara);


  // display executedCommandPara and resultPara
  executedCommandPara.style.display = 'block';
  resultPara.style.display = 'block';

  let lastElemenrOfResultPara = getLastTextChildNode(resultPara);
  lastElemenrOfResultPara._saved = resultText.replace(/ {2,}/g, ' ').trim();
  lastElemenrOfResultPara.textContent = '';
  // print result & highlight. Also, append/focus the inputCommandStrip
  printResultAndAppendinputCommandStrip(lastElemenrOfResultPara, 25, cmd);

}

/**
 * Get the current Date and Time as a pretty printed {String}
 * @returns {String}
 */
function getPrettyDateTime() {
  const now = new Date();
  const options = {
    dateStyle: 'long',
    timeStyle: 'medium',
    hour12: true
  };
  return now.toLocaleString('en-US', options);
}

// const container = document.querySelector('.container');
// const nodes = [];
// const ps = container.querySelectorAll('p');

// Add a submit button here or enter;
// BUGS
// https://stackoverflow.com/questions/155188/trigger-a-button-click-with-javascript-on-the-enter-key-in-a-text-box
