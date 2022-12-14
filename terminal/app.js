// TODO:
// Open Resume in a new page
// Terminal size should increase along with the text
// Support the mobile version
// Add some intelligence to support minor mistakes from the users
// Maybe add a command say something to just say something random
// Command: whoami, work experience, hobby, area of interests (interest), sports, achievements
// input Command should have the website (master) ⇒ at the start
// We may want to have blinking pointer in the input as well when it is in focus
// Maybe add the introductory resultPara also comes as part of the typing style
// Mayve we need to iterate the content of `codeInputField` as well
// when ENTER is pressed, we may want to have a line at the stop where we can show the command that was executed
// Instead of Type here, we can just use a cursor blink
// Support Mobile version as well
// const typableContent = 'To get started; type help and press Enter (Or click RUN)';
// Make responses more interesteing, Eg: Oops!! invalid command, here's what you can ask for:
// Cursor is not pointing properly when printing command
// Parameterise the time interval for printing.
// If the pragraph is too long, pretty print it, in the sense the print width should be fixed for each line
// Explore keeping the input field empty, just the cursor for newSection.
// In projects, we may want the user to give input either project name or serial number. For this, we may have to initialize some variable to identify that we are in a specific page (eg: projects, etc)
// implement the function to take care of typos and other errors, if any.
// Add a hyperlink to urls, and see how they can be done realtime.
// make type speed variable as per command

// Commands, yet to be added
// projects, github, clear, new, man, home
// Fixed output command
const fixedCommand = ['help', 'linkedin', 'clear', 'resume'];
// Typed command
const iteratableResultCommand = ['bio', 'man', 'projects', 'home', 'sama'];
// Special cases
// projects, sama, whoami, cd

// command outputs
const bioResult = "Pratham is a software developer currently working at Cisco 5G team. He builds highly scalable distributed network applications using some of the best industry practices when it comes to managing and monitoring those applications. \
              He has experience in building common libraries so that the developers can focus more on business logic, avoid code duplication and develop faster. \
              He has also built highly distributed pipelines for efficient testing and deployments. \
              He is fascinated by Cloud and Data. Cyber Security takes up most of his free time. If you are into security, you'll vibe :p";
const resumeResult = "Thanks for the query. Get my resume here: https://bit.ly/ResumePratham22";
const helpResult = `The folowing commands are valid:
                    help, resume, bio, linkedin`;
const contactResult = "Pratham is reachable at: go4pratham0897@gmail.com. You maybe be looking for the following commands: linkedin";
const linkedInResult = "Connect with Pratham on LinkedIn here: https://linkedin.com/in/pratham567";

// cub commands based on results
const debugCmds = ['h'];
const resumeCmds = ['resume', 'biodata', 'cv'];
const bioCmds = ['bio', 'about', 'biography', 'info', 'intro'];
const contactCmds = ['contact', 'email'];
const linkedInCmd = ['linkedin'];
const specialCmds = ['sama', 'projects'];

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
function printResultCharByChar(node, charPrintWaitTime=140) {

  console.log("Debug: starting printResultCharByChar");
  console.log(node);
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
      appendInputStrip(node);

    } else {
      node.parentNode.appendChild(cursor);
      cursor.className = 'cursor';
    }
    itrIndex++;

  }, charPrintWaitTime);

  console.log("Debug: ending printResultCharByChar");
}

// Main Call starts here;
setBackgroundColor();
const getStartedNode = getTypeableNodeContent('getStartedNodeId');

function appendInputStrip(node, delay=1000){
  setTimeout(() => {
    cursor.className = 'cursor blink';
    inputBlock.appendChild(cursor)
    node.parentNode.appendChild(inputCommandStrip);
    inputCommandStrip.style.display = "block";
    inputBlock.value='help';
    highlightCodeInputField();
  }, delay);

}

function printResultAndAppendinputCommandStrip(node, printSpeed){
  printResultCharByChar(node, printSpeed);
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
  else {
    // default result, output of help
    resultText = `Oops! unrecognised command ` + helpResult;
  }
  return resultText;

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
  printResultAndAppendinputCommandStrip(lastElemenrOfResultPara, 25);
  
  
  // The following code has a bug, run command sama and then help
  /* 
  // check for the command, if it needs to be iterated or not.
  if( cmd == 'help'){
    // Append/focus the inputCommandStrip
    appendInputStrip(lastElemenrOfResultPara, 200);
  }
  else{
    // iterate and print char by char
    lastElemenrOfResultPara._saved = resultText.replace(/ {2,}/g, ' ').trim();
    lastElemenrOfResultPara.textContent = '';
    // print result & highlight. Also, append/focus the inputCommandStrip
    printResultAndAppendinputCommandStrip(lastElemenrOfResultPara, 50);
  } 
  */

}


// const container = document.querySelector('.container');
// const nodes = [];
// const ps = container.querySelectorAll('p');

// Add a submit button here or enter;
// BUGS
// https://stackoverflow.com/questions/155188/trigger-a-button-click-with-javascript-on-the-enter-key-in-a-text-box
