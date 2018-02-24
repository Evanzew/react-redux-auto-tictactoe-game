const calculatAlmost = squares => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  if (squares[4] === null) {
    return 4;
  }
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && !squares[c]) {
      return c;
    } else if (squares[a] && squares[a] === squares[c] && !squares[b]) {
      return b;
    } else if (squares[b] && squares[b] === squares[c] && !squares[a]) {
      return a;
    } else if (squares[b] && squares[b] === squares[a] && !squares[c]) {
      return c;
    } else if (squares[c] && squares[c] === squares[a] && !squares[b]) {
      return b;
    } else if (squares[c] && squares[c] === squares[b] && !squares[a]) {
      return a;
    }
  }
  var squareNum = 0;
  while (true) {
    let randomNum = parseInt(Math.random() * 9, 0);
    if (!squares[randomNum]) {
      squareNum = randomNum;
      break;
    }
  }
  return squareNum;
};
export default calculatAlmost;
