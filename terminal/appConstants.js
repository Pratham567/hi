



// // CONSTANTS
// const appVersionString = "1.1.10";
// const lastUpdated = "February 20th, 2023";
// const RESUME_URL = "https://bit.ly/ResumePratham22";
// const LINKEDIN_URL = "https://linkedin.com/in/pratham567";

// // Commands, yet to be added
// // projects, github, clear, new, man, home, date, sudo (not allowed), technical skills, 
// // Fixed output command
// const fixedCommand = ['help', 'linkedin', 'clear', 'resume'];
// // Typed command
// const iteratableResultCommand = ['bio', 'man', 'projects', 'home', 'sama'];
// // Special cases
// // projects, sama, whoami, cd

// // cub commands based on results
// const debugCmds = ['h'];
// const resumeCmds = ['resume', 'biodata', 'cv'];
// const bioCmds = ['bio', 'about', 'biography', 'info', 'intro'];
// const contactCmds = ['contact', 'email'];
// const linkedInCmd = ['linkedin'];
// const specialCmds = ['sama', 'projects'];
// const randomCmds = ['random'];
// const sudoCmd = ['sudo'];

// // Prefixes
// const failedResultPrefixActionWords = ['Oops', 'Ahh', 'Oh no', "I'm sorry", 'Apologies', 'Whoops', 'Uh-oh', "That's bad", 'Yikes', 'Oh boy', 'Dang', 'Pardon'];
// const failedResultPrefix = ["this command is not possible",
//                             "this is invalid",
//                             "this seems incorrect",
//                             "that seems invalid",
//                             "this is an invalid request",
//                             "this is incorrect",
//                             "this cannot be done",
//                             "this command cannot be executed",
//                             "that's not a valid option",
//                             "that's an invalid request",
//                             "that's not allowed",
//                             "this action is not permitted",
//                             "this request is not recognized",
//                             "that's not a valid input",
//                             "I can't do that",
//                             "the command is not available yet",
//                             "the system is unable to process that request",
//                             "the request is not supported",
//                             "the request is not possible at this time",
//                             "that's not a valid operation",
//                             "I'm afraid I can't comply with that request",
//                             "that's an unrecognized command",
//                             "I cannot recognize that command",
//                             "I cannot recognize the request",
//                             "I cannot fulfill that command",
//                             "I cannot fulfil that request",
//                             "that's not a valid choice",
//                             "that's not a valid selection",
//                             "that's not a supported option",
//                             "that's not a valid command",
//                             "I don't understand the request",
//                             "I don't understand the command",
//                             "the input is not recognized",
//                             "the input is not valid",
//                             "the input is incoorect",
//                             "the input cannot be processed",
//                             "the request is not feasible",
//                             "the request is not allowed",
//                             "the request is not permitted",
//                             "that's not a valid request",
//                             ]

// // command outputs
// const helpResult = `The following commands are valid:
//                     help, resume, bio, linkedin, random`;
// const bioResult = "Pratham is a software developer currently working at Cisco 5G team. He builds highly scalable distributed network applications using some of the best industry practices when it comes to managing and monitoring those applications. \
//                   He has experience in building common libraries so that the developers can focus more on business logic, avoid code duplication and develop faster. \
//                   He has also built highly distributed pipelines for efficient testing and deployments. \
//                   He is fascinated by Cloud and Data. Cyber Security takes up most of his free time. If you are into security, you'll vibe :p";
// const resumeResult = "Thanks for the query. Get my resume here: " + RESUME_URL + ". Hold on, opening in a new tab. Please check if the pop-ups are not blocked";
// const contactResult = "Pratham is reachable at: go4pratham0897@gmail.com. You maybe be looking for the following commands: linkedin";
// const linkedInResult = "Connect with Pratham on LinkedIn here: " + LINKEDIN_URL + ". Hold on, opening in a new tab. Please check if the pop-ups are not blocked";
// const randomString = ["Pratham has a bachelors degree in Chemical Engineering.",
//                       "Pratham has won the President's Gold Medal Award for his all round performance and his contributions to the department/college/society..",
//                       "Pratham has travelled to 3 different countries.",
//                       "Pratham has been very active in sports and have won multiple medls during college and holds records like maximum push-ups, maximum pull-ups in a go.",
//                       "Pratham has learnt development by himself.",
//                       "Pratham has a deep interest in cybersecurity, specially in reverse engineering.",
//                       "Pratham files taxes by himself.",
//                       "Pratham has won medals in body-building competitions.",
//                       "Pratham like to eat neew things, but he's vegetarian.",
//                       "Pratham's favourite fruit is apple.",
//                       "Please try again....",
//                       "Pratham believes in giving back to the society, hence he has been part of various social initiatives in college.",
//                       "Pratham has volunteered with Robinhood Army.",
//                       "Pratham has published a research paper on biofuel production from wheat straw in pre-final year of his bachelor's.",
//                       "Pratham has been a student mentor in his college.",
//                       "Pratham, along with a few other Alumni of IITR, has developed Alumni Mentorship Program for the benefit of current students of IIT.",
//                       "Pratham loves to travel.",
//                       "Pratham dreams of having a Vanity Van one day.",
//                       "Pratham dreams of setting up a Research and Development Lab in India.",
//                       "Pratham wants to stay in India in long term.",
//                       "For Pratham, job quality matters more than money.",
//                       "Pratham has refused offers from big companies like Amazon, Oracle....",
//                       "Pratham loves to reach technical blogs, not he doesn't want to go for higher studies.",
//                       "Prtham's friend call hin: SAMA.",
//                       "Pratham likes to play badminton.",
//                       "Pratham was part of team Athletics of IIT Roorkee.",
//                       "Pratham has run marathon since he was in first year at college.",
//                       "Pratham can write code in multiple languages.",
//                       "This website was developed by Pratham, just for fun.",
//                       "Pratham believes more in long term investment than short term swings.",
//                       "Pratham can talk about sports, finance, life, games, cars.",
//                       "Pratham is reachable at: go4pratham0897@gmail.com",
//                       "This website doesn't use AI, but may use in future.",
//                       "Pratham was awarded Student of the Year Award in his pre-final year of bachelors.",
//                       "Pratham has won Heritage Award for all-round excellence award back-to-back for 3 consecutive years.",
//                       "Pratham has won Special Contribution to the Department Award for consecutive 2 years.",
//                       "Pratham was an Undergraduate Teaching Assistant in his college, supporting freshers with a smooth transition to their college life.",
//                       "The first book Pratham purchased for his interest was: Computer Networks: A top down approach.",
//                       "Out of interest, Pratham has read over 5 technical books and counting...",
//                       "Pratham prefer Microservices over Monoliths.",
//                       "Pratham prefers backend over frontend.",
//                       "Pratham can build CICD pipelines from scratch.",
//                       "Pratham can develop highly scalable, high throughput applications.",
//                       "Pratham can build asynchronous servers.",
//                       "Pratham can design and develop a production grade product, including microservices, libraries, testing pipelines, deployment, etc.",
//                       "Pratham is not active on Social Media."
//                     ];


// export { appVersionString, lastUpdated, RESUME_URL, LINKEDIN_URL, fixedCommand, iteratableResultCommand };
// export { debugCmds, resumeCmds, bioCmds, contactCmds, linkedInCmd, specialCmds, randomCmds, sudoCmd };
// export { failedResultPrefixActionWords, failedResultPrefix, helpResult, bioResult, resumeResult, contactResult, linkedInResult, randomString};

