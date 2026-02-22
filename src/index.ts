import { addI } from './simple-add-i';

function test(input: string) {
  console.log('Hello.');
  console.log('String received: ', input);
  const res = addI(1, 2);
  console.log('Res:', res);
}

test('Input');
