// Contribution guidelines
// Update the app version, update the lastUpdated
// If adding a new command, make sure to add it in the help command description as well.


// TODO:
// Open Resume in a new page
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
// Extend the commandStrip to the end of the terminal


// CONSTANTS
const appVersionString = "1.1.9";
const lastUpdated = "February 20th, 2023";
const RESUME_URL = "https://bit.ly/ResumePratham22";
const LINKEDIN_URL = "https://linkedin.com/in/pratham567";

// Commands, yet to be added
// projects, github, clear, new, man, home
// Fixed output command
const fixedCommand = ['help', 'linkedin', 'clear', 'resume'];
// Typed command
const iteratableResultCommand = ['bio', 'man', 'projects', 'home', 'sama'];
// Special cases
// projects, sama, whoami, cd

// cub commands based on results
const debugCmds = ['h'];
const resumeCmds = ['resume', 'biodata', 'cv'];
const bioCmds = ['bio', 'about', 'biography', 'info', 'intro'];
const contactCmds = ['contact', 'email'];
const linkedInCmd = ['linkedin'];
const specialCmds = ['sama', 'projects'];
const randomCmds = ['random'];

// command outputs
const helpResult = `The folowing commands are valid:
                    help, resume, bio, linkedin, random`;
const bioResult = "Pratham is a software developer currently working at Cisco 5G team. He builds highly scalable distributed network applications using some of the best industry practices when it comes to managing and monitoring those applications. \
              He has experience in building common libraries so that the developers can focus more on business logic, avoid code duplication and develop faster. \
              He has also built highly distributed pipelines for efficient testing and deployments. \
              He is fascinated by Cloud and Data. Cyber Security takes up most of his free time. If you are into security, you'll vibe :p";
const resumeResult = "Thanks for the query. Get my resume here: " + RESUME_URL + ". Hold on, opening in a new tab. Please check if the pop-ups are not blocked";
const contactResult = "Pratham is reachable at: go4pratham0897@gmail.com. You maybe be looking for the following commands: linkedin";
const linkedInResult = "Connect with Pratham on LinkedIn here: " + LINKEDIN_URL + ". Hold on, opening in a new tab. Please check if the pop-ups are not blocked";
const randomString = ["Pratham has a bachelors degree in Chemical Engineering.",
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
                      "Out of interest, Pratham has read over 5 technical books and counting...",
                      "Pratham prefer Microservices over Monoliths.",
                      "Pratham prefers backed over frontend.",
                      "Pratham can build CICD pipelines from scratch.",
                      "Pratham can develop highly scalable, high throughput applications.",
                      "Pratham can build asynchronous servers.",
                      "Pratham can design and develop a production grade product, including microservices, libraries, testing pipelines, deployment, etc.",
                      "Pratham is not active on Social Media."
                    ];

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

// input Command Strip
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


// Main Call starts here;
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
  
  let resultText = '';
  
  if(specialCmds.includes(cmd)){
    resultText = 'This is a special command. Coming soon.....'
  }
  else if (debugCmds.includes(cmd)){
    resultText = "this is the text Content of the resultPara";
  }
  else if (cmd == 'help'){
    resultText = helpResult;
                    }
  else if (bioCmds.includes(cmd)){
    resultText = bioResult;
  }
  else if (contactCmds.includes(cmd)){
    resultText = contactResult;
  }
  else if (resumeCmds.includes(cmd)){
    resultText = resumeResult;
  }
  else if (linkedInCmd.includes(cmd)){
    resultText = linkedInResult;
  }
  else if (randomCmds.includes(cmd)){
    resultText = randomString[Math.floor(Math.random()*randomString.length)];
  }
  else {
    // default result, output of help
    resultText = `Oops! unrecognised command ` + helpResult;
  }
  return resultText;

}

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

  
  
  // if(specialCmds.includes(cmd)){
  //   resultText = 'This is a special command. Coming soon.....'
  // }
  // else if (debugCmds.includes(cmd)){
  //   resultText = "this is the text Content of the resultPara";
  // }
  // else if (cmd == 'help'){
  //   resultText = helpResult;
  //                   }
  // else if (bioCmds.includes(cmd)){
  //   resultText = bioResult;
  // }
  // else if (contactCmds.includes(cmd)){
  //   resultText = contactResult;
  // }
  // else if (randomCmds.includes(cmd)){
  //   resultText = randomString[Math.floor(Math.random()*randomString.length)];
  // }
  // else {
  //   // default result, output of help
  //   resultText = `Oops! unrecognised command ` + helpResult;
  // }
  // return resultText;

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


// const container = document.querySelector('.container');
// const nodes = [];
// const ps = container.querySelectorAll('p');

// Add a submit button here or enter;
// BUGS
// https://stackoverflow.com/questions/155188/trigger-a-button-click-with-javascript-on-the-enter-key-in-a-text-box
