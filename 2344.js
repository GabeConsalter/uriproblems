let rl = require('readline');
let prompts = rl.createInterface(process.stdin, process.stdout);

prompts.question('', (input) => {
  console.log(getChar(Number(input)));
  process.exit();
});

function getChar(input){

  if(input >= 1 && input <= 35)
    return 'D';
  else if(input >= 36 && input <= 60)
    return 'C';
  else if(input >= 61 && input <= 85)
    return 'B';
  else if(input >= 86)
    return 'A';
  
  return 'E';
}