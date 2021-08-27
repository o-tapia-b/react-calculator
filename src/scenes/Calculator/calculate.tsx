export {}

const numberRegex = /^((?:\d+(?:\.\d*)?)|(?:\.\d+))$/;
const opRegex = /^((?:\d+(?:\.\d*)?)|(?:\.\d+))([+\-*/])((?:\d+(?:\.\d*)?)|(?:\.\d+))$/;

const calculate = (op:string) => {
  if(numberRegex.test(op))
    return op;

  const match = opRegex.exec(op);

  if(typeof match?.[0] === 'undefined')
    return 'error';

  const a = parseFloat(match?.[1]);
  const b = parseFloat(match?.[3]);

  switch(match?.[2]){
    case '+':
      return (a + b).toString();
    case '-':
      return (a - b).toString();
    case '*':
      return (a * b).toString();
    case '/':
      return (a / b).toString();
    default :
      return 'error';
  };
}

export default calculate;
