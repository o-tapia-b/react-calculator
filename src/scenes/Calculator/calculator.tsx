import styled from 'styled-components';
import { useState, useCallback } from 'react';

import calculate from './calculate';
import Button from 'components/button';

const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 40px);
  grid-template-rows: auto repeat(4, 40px);
  grid-template-areas:
    "display display display display display"
    "_7      _8      _9      plus    c"
    "_4      _5      _6      minus   ."
    "_1      _2      _3      times   ."
    "_0      dot     .       by      equals";

  background: teal;

  .display {
    background: darkslategray;
    grid-area: display;
    overflow-y: clip;
    padding: 20px 5px;
    text-align: right;
    text-overflow: ellipsis;
  }

  .btn_0 {
    grid-area: _0;
  }

  .btn_1 {
    grid-area: _1;
  }

  .btn_2 {
    grid-area: _2;
  }

  .btn_3 {
    grid-area: _3;
  }

  .btn_4 {
    grid-area: _4;
  }

  .btn_5 {
    grid-area: _5;
  }

  .btn_6 {
    grid-area: _6;
  }

  .btn_7 {
    grid-area: _7;
  }

  .btn_8 {
    grid-area: _8;
  }

  .btn_9 {
    grid-area: _9;
  }

  .btn_dot {
    grid-area: dot;
  }

  .btn_plus {
    grid-area: plus;
  }

  .btn_minus {
    grid-area: minus;
  }

  .btn_times {
    grid-area: times;
  }

  .btn_by {
    grid-area: by;
  }

  .btn_c {
    grid-area: c;
  }

  .btn_equals {
    grid-area: equals;
  }
`;

const Calculator = () => {
  const [display, setDisplay] = useState('0');

  const clear = useCallback(() => setDisplay('0'), [setDisplay]);

  const concat = useCallback(
    (c?:string) => setDisplay(d => (d === '0') ? (c ?? '0' ) : d + c),
    []
  );

  const equals = useCallback(() => setDisplay(d => calculate(d)),[]);

  return (
    <Box>
      <span className="display">{ display }</span>
      <Button className='btn_0'     char='0' onClick={ concat }>0</Button>
      <Button className='btn_1'     char='1' onClick={ concat }>1</Button>
      <Button className='btn_2'     char='2' onClick={ concat }>2</Button>
      <Button className='btn_3'     char='3' onClick={ concat }>3</Button>
      <Button className='btn_4'     char='4' onClick={ concat }>4</Button>
      <Button className='btn_5'     char='5' onClick={ concat }>5</Button>
      <Button className='btn_6'     char='6' onClick={ concat }>6</Button>
      <Button className='btn_7'     char='7' onClick={ concat }>7</Button>
      <Button className='btn_8'     char='8' onClick={ concat }>8</Button>
      <Button className='btn_9'     char='9' onClick={ concat }>9</Button>
      <Button className='btn_dot'   char='.' onClick={ concat }>.</Button>
      <Button className='btn_plus'  char='+' onClick={ concat }>+</Button>
      <Button className='btn_minus' char='-' onClick={ concat }>-</Button>
      <Button className='btn_times' char='*' onClick={ concat }>x</Button>
      <Button className='btn_by'    char='/' onClick={ concat }>/</Button>
      <Button className='btn_c'      onClick={ clear }>C</Button>
      <Button className='btn_equals' onClick={ equals }>=</Button>
    </Box>
  );
}

export default Calculator;
