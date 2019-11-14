let codeHumorArr = ["https://preview.redd.it/lqjoadneq8y31.jpg?width=640&crop=smart&auto=webp&s=811faf25c557b576167b646235a23135e07bb434", "https://preview.redd.it/vne2doock7y31.png?width=640&crop=smart&auto=webp&s=4bd3526721396e887d5be24c37ddeb3f9abb57e5", "https://i.redd.it/lqa83cw95ay31.jpg", "https://preview.redd.it/ysvhu6mn54y31.jpg?width=640&crop=smart&auto=webp&s=df01dfe506853426316cd07fe425292d97bac5d7", "https://external-preview.redd.it/rnqp4a2ZbZskVkVpe21j-BamMMk9vvJ6cnjtjx36sb0.jpg?width=640&crop=smart&auto=webp&s=4df94ad2a6cca61548c256cd079c84af6e680a14", "https://preview.redd.it/6wksqjmmyw321.jpg?width=640&crop=smart&auto=webp&s=d7a1c5d72af69db7c22ec6e662ec020ff267549c", "https://preview.redd.it/mar8p5zhhm131.jpg?width=640&crop=smart&auto=webp&s=957cfba55d8fbd56cdf08be5600cdda3f7073a3f", "https://external-preview.redd.it/eNb7oj39tPCKdFEHcgJtIv_YdFJsTXl2KEtHSWHmlQk.jpg?width=640&crop=smart&auto=webp&s=a75420cd6fce13b5ff6020605602bc3cd50f63e3", "https://preview.redd.it/6fttplx5kbk21.jpg?width=640&crop=smart&auto=webp&s=cc382a419b2ea4fd0ad6e55c277473266f0e70ac", "https://external-preview.redd.it/7VFNpJkplUj_Q_Ges6OaHncBdX8QpkULGAqa0gpNwU8.jpg?width=640&crop=smart&auto=webp&s=2147d4229cb7b70b3e43f519cccb65b63ce04cd4"];
let regExCodeWord;
//date variables would have to be altered for new class with new class times (in GMT)
let now = new Date().getTime();
let date1 = new Date('November 13, 2019 00:00:00').getTime();
let date2 = new Date('November 15, 2019 00:00:00').getTime();
let date3 = new Date('November 20, 2019 00:00:00').getTime(); 
let date4 = new Date('November 22, 2019 00:00:00').getTime();
let date5 = new Date('November 27, 2019 00:00:00').getTime();
let date6 = new Date('December 4, 2019 00:00:00').getTime();
let date7 = new Date('December 6, 2019 00:00:00').getTime();
let date8 = new Date('December 11, 2019 00:00:00').getTime();
let date9 = new Date('December 13, 2019 00:00:00').getTime();
let date10 = new Date('December 18, 2019 00:00:00').getTime();
let date11 = new Date('December 20, 2019 00:00:00').getTime();
let date12 = new Date('January 3, 2019 00:00:00').getTime();
let date13 = new Date('January 8, 2019 00:00:00').getTime();
let date14 = new Date('January 10, 2019 00:00:00').getTime();
let classDates = [date1, date2, date3, date4, date5, date6, date7, date8, date9, date10, date11, date12, date13, date14];
//this selects the smalles number in the array that is larger than let now
let result = Math.min.apply(Math, classDates.filter(function(x){return x > now}));
//this calculates the number of seconds between now (now) and the next class (result)
let timeToClass = (Math.round((result - now)/1000));
//the function that parses the number of seconds into human readable language
let classList = ["@Joshua Ward", "@Myles Tyrer", "@Swapnil Shah", "@Tamar Oskanian", "@Gregory Testo", "@Jeff Bartelli", "@Jose Nunez", "@Rebecca Schmidt", "@Riley Findley", "@Tim Wallach"];

function formatTime (seconds) { 

     if (seconds === 0) { return ("now") }
     else {
          let years = 0;
          let days = 0;
          let hours = 0;
          let minutes = 0;
          let arrayRawTime = [];
          let arrayFiltered = [];
          let sliceLast2= [];
          let sliceLast2Joined;
          let sliceTheRest;
          let sliceTheRestWithComma;
          //if seconds is equal to at least 1 year or more
          //rounds down to provide the full number of years contained in the seconds
          //subtracts the full number of years from the seconds to be the new value for seconds
          //determine whether to use singular or plural 
        if (seconds >= 31536000){ years = Math.floor(seconds / 31536000); seconds -= (31536000 * years); 
          if (years > 1) { 
               years = years + ' years';
          }
          else {
               years = years + ' year';
               }
          }  
     
       if (seconds >= 86400){ days = Math.floor(seconds/86400); seconds -= (86400 * days); 
          if (days > 1) {
               days = days + ' days';
          }
          else {
               days = days + ' day';
          }
          }
          
       if (seconds >= 3600) { hours = Math.floor(seconds / 3600); seconds -= 3600 * hours; 
          if (hours > 1) {
          hours = hours + ' hours';
          }
          else {
               hours = hours + ' hour';
          }
          }
          
       if (seconds >= 60){ minutes = Math.floor(seconds / 60) ; seconds -= 60 * minutes; 
          if (minutes > 1) {
          minutes = minutes + ' minutes';
          }
          else {
               minutes = minutes + ' minute';
          }
          }
     
          if (seconds > 1) {
          seconds = seconds + ' seconds';
          }
          if (seconds === 1) {
               seconds = seconds + ' second';
          }  
     
          arrayRawTime = [years, days, hours, minutes, seconds];
          //gets rid of any non-string values returned (mostly 0 (I think) (did this a little while ago))
          arrayFiltered = arrayRawTime.filter(word => word.length > 1);
          
          if (arrayFiltered.length === 1) {
          return arrayFiltered[arrayFiltered.length -1];
          }
          else {
          //crazy array and string methods to accomplish the human readable language desired in each case. Lots of trial and error and console logging     
          sliceLast2 = arrayFiltered.slice(-2);
          sliceLast2.splice(1, 0, 'and')
          sliceLast2Joined = sliceLast2.join(' ');
          sliceTheRest = arrayFiltered.slice(-6,-2);
          sliceTheRestWithComma = sliceTheRest.join(', ');
          if (sliceTheRestWithComma.length > 1) { sliceTheRestWithComma = sliceTheRestWithComma + ", "; }
          return sliceTheRestWithComma + sliceLast2Joined;
          }
               
     }
     
}

module.exports = function(robot) {
    //if class is mentioned, robot will respond with a notification message for time left until class 
     robot.hear(/class/i, function(mes) {
          if (Number.isFinite(result)) {
               return mes.send("We have " + formatTime(timeToClass) + " left until our next class");
          }
          else {
               return mes.send("Sign up for another class. This one is over.");
          }
     });

     //this regEx was matching empty spaces. &&^(?!\s*$).+ (match must contain a non-space character) fix
     regExCodeWord = /code|coding|function|argument|parameter|bug|variable|loop|error|errors|scope|string|array|object|key|method|prototype|property|iterate|constructor|json|api|react&&^(?!\s*$).+/gi;
     robot.hear(regExCodeWord, function(res) {
          //add global to have res.match return the content the user entered that contains one (or several) of the words matched
          let codeWordHeard = res.match;
          //create a string out of the array, get rid of the many spaces around the keywords, then split back into an array
          let codeWord = codeWordHeard.join(" ").trim().split(" ");
          //use object notation to perform multiple returns
          let returns = getRes();
          let res1 = returns.res1;
          let res2 = returns.res2;
          //select first element in the codeWord Array
          function getRes() {
               return {
                    res1: res.reply("Take a break from your " + codeWord[0] +  "! "), 
                    res2: res.send(res.random(codeHumorArr))
               };
          }
     });

     robot.hear(/blame/i, function(msg) {
          var randClassPers = classList[Math.floor(Math.random() * classList.length)];
               return msg.send("Blame " + randClassPers + " !");
          });
          
          //I tried including the match for the operation with spaces as well as without spaces. It matched in regex101 when I tested it (noticed later it was set to flavor PHP), but not when using the robot.respond method, for some reason. I changed it to robot.hear, where it worked, but when it did, it did not return the numbers in the msg.match (it only returned the operator symbol). And so I got rid of the option to use a space between the numbers and operators
          //RegEx not used  / \d*\*\d*|\d*[[:space:]]\*[[:space:]]\d*|\d*\+\d*|\d*[[:space:]]\+[[:space:]]\d*|\d*\-\d*|\d*[[:space:]]\-[[:space:]]\d*|\d*\/\d*|\d*[[:space:]]\/[[:space:]]\d*|\d*\%\d*|\d*[[:space:]]\%[[:space:]]\d*&&^(?!\s*$).+
          //tried shortening the regex with | for the operators, \s* and \S. I failed.

          //this function can take an operation (-, +, *, %, /) with two (positive only, sorry) numbers. Written as NumberOperatorNumber or multiples NumberOperatorNumber NumberOperatorNumber NumberOperatorNumber, which returns result result result

          robot.hear(/ \d*\*\d*|\d*\+\d*|\d*\-\d*|\d*\/\d*|\d*\%\d*&&^(?!\s*$).+/g, function(msg) {
          let operationArray = msg.match;
          let numberArray = [];
          let calcs = [];
               for (let i = 0; i < operationArray.length; i++) {
               if ((operationArray[i]).match(/\+/)) {
                    numberArray = operationArray[i].split('+');
                    calcs.push(msg.send( Number(numberArray[0]) + Number(numberArray[1])));
               }
               else if ((operationArray[i]).match(/\-/)) {
                    numberArray = operationArray[i].split('-');
                    calcs.push(msg.send( Number(numberArray[0]) - Number(numberArray[1])));
               }
               else if ((operationArray[i]).match(/\//)) {
                    numberArray = operationArray[i].split('/');
                    calcs.push(msg.send( Number(numberArray[0]) / Number(numberArray[1])));
               }
               else if ((operationArray[i]).match(/\*/)) {
                    numberArray = operationArray[i].split('*');
                    calcs.push(msg.send( Number(numberArray[0]) * Number(numberArray[1])));
               }
               else if ((msg.match[i]).match(/\%/)) {
                    numberArray = operationArray[i].split('%');
                    calcs.push(msg.send( Number(numberArray[0]) % Number(numberArray[1])));
               }
          }  
          return calcs; 
     }); 

};  


