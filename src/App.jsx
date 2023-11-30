import { useState } from 'react';

function App() {
  const [expression, setExpression] = useState('');

  // Функция для проверки последовательности двух математических символов
  const hasConsecutiveMathSymbols = (input) => {
    const mathSymbols = ['+', '-', '*', '/'];
    for (let i = 0; i < input.length - 1; i++) {
      const currentChar = input[i];
      const nextChar = input[i + 1];
      if (mathSymbols.includes(currentChar) && mathSymbols.includes(nextChar)) {
        return true; // Если найдены два математических символа подряд, возвращаем true
      }
    }
    return false; // Если не найдены, возвращаем false
  };

  const handleButtonClick = (value) => {
    // newExpression - в эту переменную мы сохраняем всю строку введенную пользователем
    const newExpression = expression + value;

    // И передаем эту строку в функцию
    if (!hasConsecutiveMathSymbols(newExpression)) {
      setExpression(newExpression);
    }
  };

  // Функция для вычисления
  const handleCalculate = () => {
    const mathSymbols = ['+', '-', '*', '/'];
    // это проверка чтобы в инпуте последним не стоял знак мат символа
    if (!mathSymbols.includes(expression[expression.length - 1])) {
      setExpression(eval(expression));
    }
  };

  // Функция удаления элемента
  const handleButtonDelete = () => {
 
    const text = expression.toString().slice(0, -1);
    setExpression(text);
  };

  const handleButtonChange = (e) => {
    const newExpression = e.target.value;

    // Проверка на ввод только цифр и математических символов (+, -, *, /, .)
    const regex = /^[0-9*\/+-.]*$/;

    if (!hasConsecutiveMathSymbols(newExpression) && regex.test(newExpression)) {
      setExpression(newExpression);
    }
  };

  return (
    <div className='App'>
      <div className='container'>
        <div className='blockInput'>
          <input className='button delete' type='button' value='C' onClick={handleButtonDelete} />
          <input className='input' onChange={handleButtonChange} type='text' value={expression} />
        </div>
        <div className='block'>
          <button className='button' onClick={() => handleButtonClick('1')}>
            1
          </button>
          <button className='button' onClick={() => handleButtonClick('2')}>
            2
          </button>
          <button className='button' onClick={() => handleButtonClick('3')}>
            3
          </button>
          <button className='button action' onClick={() => handleButtonClick('+')}>
            +
          </button>
        </div>
        <div className='block'>
          <button className='button' onClick={() => handleButtonClick('4')}>
            4
          </button>
          <button className='button' onClick={() => handleButtonClick('5')}>
            5
          </button>
          <button className='button' onClick={() => handleButtonClick('6')}>
            6
          </button>
          <button className='button action' onClick={() => handleButtonClick('-')}>
            -
          </button>
        </div>
        <div className='block'>
          <button className='button' onClick={() => handleButtonClick('7')}>
            7
          </button>
          <button className='button' onClick={() => handleButtonClick('8')}>
            8
          </button>
          <button className='button' onClick={() => handleButtonClick('9')}>
            9
          </button>
          <button className='button action' onClick={() => handleButtonClick('/')}>
            ÷
          </button>
        </div>
        <div className='block'>
          <button className='button' onClick={() => handleButtonClick('0')}>
            0
          </button>
          <button className='button' onClick={() => handleButtonClick('.')}>
            .
          </button>
          <button className='button equally' onClick={handleCalculate}>
            =
          </button>
          <button className='button action' onClick={() => handleButtonClick('*')}>
            x
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
