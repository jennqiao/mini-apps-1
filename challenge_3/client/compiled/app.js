class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      board: [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]],
      isFirstPlayer: true,
      winner: null

    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(col) {

    var copyBoard = this.state.board.slice(0);
    var row = 0;
    for (var i = 0; i < copyBoard.length; i++) {
      if (copyBoard[i][col] === 0) {
        row = i;
      }
    }

    copyBoard[row][col] = this.state.isFirstPlayer ? 1 : -1;
    console.log(copyBoard);

    this.setState({
      board: copyBoard,
      isFirstPlayer: !this.state.isFirstPlayer
    });

    this.checkRows();
    this.checkCols();
    this.checkRightDiags();
    this.checkLeftDiags();
  }

  setWinner(square) {

    if (square === 1) {
      this.setState({
        winner: 'first player'
      });
    } else {
      this.setState({
        winner: 'second player'
      });
    }
  }

  checkRows() {

    var board = this.state.board;
    for (var i = 0; i < board.length; i++) {

      for (var c = 0; c < board[0].length - 3; c++) {
        var row = board[i];
        var square = row[c];
        if (square !== 0) {
          if (square === row[c + 1] && square === row[c + 2] && square === row[c + 3]) {
            this.setWinner(square);
          }
        }
      }
    }
  }

  checkCols() {

    var board = this.state.board;
    for (var c = 0; c < board[0].length; c++) {

      for (var r = board.length - 1; r > 2; r--) {
        var square = board[r][c];

        if (square !== 0) {
          if (square === board[r - 1][c] && square === board[r - 2][c] && square === board[r - 3][c]) {
            this.setWinner(square);
          }
        }
      }
    }
  }

  checkRightDiags() {

    var board = this.state.board;
    for (var r = 3; r < board.length; r++) {
      var row = board[r];
      for (var c = 0; c < board.length - 3; c++) {
        var square = row[c];
        if (square !== 0) {
          if (square === board[r - 1][c + 1] && square === board[r - 2][c + 2] && square === board[r - 3][c + 3]) {
            this.setWinner(square);
          }
        }
      }
    }
  }

  checkLeftDiags() {

    var board = this.state.board;
    for (var r = 0; r < board.length - 3; r++) {
      var row = board[r];
      for (var c = 0; c < board[0].length - 3; c++) {
        var square = row[c];
        if (square !== 0) {
          if (square === board[r + 1][c + 1] && square === board[r + 2][c + 2] && square === board[r + 3][c + 3]) {
            this.setWinner(square);
          }
        }
      }
    }
  }

  render() {

    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'CONNECT 4 TO WIN'
      ),
      React.createElement(
        'table',
        null,
        React.createElement(Headers, { data: [0, 1, 2, 3, 4, 5, 6], selectColumn: this.onClick })
      ),
      React.createElement(
        'table',
        { className: 'board' },
        React.createElement(
          'tbody',
          null,
          this.state.board.map((row, index) => {
            return React.createElement(Row, { key: index, data: row, row: index, selectSquare: this.onClick });
          })
        )
      ),
      React.createElement(
        'div',
        null,
        this.state.winner ? React.createElement(
          'h2',
          { className: 'winner' },
          'Winner is ',
          this.state.winner,
          '!'
        ) : React.createElement('div', null)
      )
    );
  }
}

var Headers = ({ data, selectColumn }) => React.createElement(
  'tr',
  null,
  data.map((row, index) => {
    return React.createElement(
      'th',
      { key: index, onClick: () => {
          selectColumn(index);
        } },
      'v'
    );
  })
);

var Row = ({ data, row, selectSquare }) => React.createElement(
  'tr',
  null,
  data.map((square, index) => {

    if (square !== 0) {
      return React.createElement('td', { key: index, className: square === 1 ? 'yellow' : 'red' });
    } else {
      return React.createElement('td', { key: index });
    }
  })
);

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJib2FyZCIsImlzRmlyc3RQbGF5ZXIiLCJ3aW5uZXIiLCJvbkNsaWNrIiwiYmluZCIsImNvbCIsImNvcHlCb2FyZCIsInNsaWNlIiwicm93IiwiaSIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsImNoZWNrUm93cyIsImNoZWNrQ29scyIsImNoZWNrUmlnaHREaWFncyIsImNoZWNrTGVmdERpYWdzIiwic2V0V2lubmVyIiwic3F1YXJlIiwiYyIsInIiLCJyZW5kZXIiLCJtYXAiLCJpbmRleCIsIkhlYWRlcnMiLCJkYXRhIiwic2VsZWN0Q29sdW1uIiwiUm93Iiwic2VsZWN0U3F1YXJlIiwid2luZG93Il0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxHQUFOLFNBQWtCQyxNQUFNQyxTQUF4QixDQUFrQzs7QUFFaENDLGNBQVlDLEtBQVosRUFBbUI7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYTs7QUFFVEMsYUFBTyxDQUFDLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixDQUFELEVBQWtCLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixDQUFsQixFQUFtQyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsQ0FBbkMsRUFBbUQsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLENBQW5ELEVBQW9FLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxF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QyxJQUFJdUIsVUFBVSxDQUFDLEVBQUNDLElBQUQsRUFBT0MsWUFBUCxFQUFELEtBRVo7QUFBQTtBQUFBO0FBR0lELE9BQUtILEdBQUwsQ0FBUyxDQUFDZixHQUFELEVBQU1nQixLQUFOLEtBQWdCO0FBQ3ZCLFdBQU87QUFBQTtBQUFBLFFBQUksS0FBS0EsS0FBVCxFQUFnQixTQUFVLE1BQUs7QUFBQ0csdUJBQWFILEtBQWI7QUFBb0IsU0FBcEQ7QUFBQTtBQUFBLEtBQVA7QUFDRCxHQUZEO0FBSEosQ0FGRjs7QUFjQSxJQUFJSSxNQUFNLENBQUMsRUFBQ0YsSUFBRCxFQUFPbEIsR0FBUCxFQUFZcUIsWUFBWixFQUFELEtBRVI7QUFBQTtBQUFBO0FBRUlILE9BQUtILEdBQUwsQ0FBVSxDQUFDSixNQUFELEVBQVFLLEtBQVIsS0FBa0I7O0FBRTFCLFFBQUlMLFdBQVcsQ0FBZixFQUFrQjtBQUNoQixhQUFPLDRCQUFJLEtBQUtLLEtBQVQsRUFBZ0IsV0FBWUwsV0FBUyxDQUFWLEdBQWUsUUFBZixHQUF5QixLQUFwRCxHQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsYUFBTyw0QkFBSSxLQUFLSyxLQUFULEdBQVA7QUFFRDtBQUNGLEdBUkQ7QUFGSixDQUZGOztBQW1CQU0sT0FBT3BDLEdBQVAsR0FBYUEsR0FBYiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICBcbiAgICAgICAgYm9hcmQ6IFtbMCwwLDAsMCwwLDAsMF0sIFswLDAsMCwwLDAsMCwwXSwgWzAsMCwwLDAsMCwwLDBdLFswLDAsMCwwLDAsMCwwXSwgWzAsMCwwLDAsMCwwLDBdLCBbMCwwLDAsMCwwLDAsMF1dLFxuICAgICAgICBpc0ZpcnN0UGxheWVyOiB0cnVlLFxuICAgICAgICB3aW5uZXI6IG51bGxcbiAgICAgIFxuICAgIH1cbiAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKTtcblxuICB9XG5cbiAgXG4gIG9uQ2xpY2soY29sKSB7XG4gICAgXG4gICAgdmFyIGNvcHlCb2FyZCA9ICB0aGlzLnN0YXRlLmJvYXJkLnNsaWNlKDApO1xuICAgIHZhciByb3cgPSAwO1xuICAgIGZvciAodmFyIGk9MDsgaTxjb3B5Qm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChjb3B5Qm9hcmRbaV1bY29sXSA9PT0gMCkge1xuICAgICAgICByb3cgPSBpO1xuICAgICAgfVxuICAgIH0gICAgXG4gIFxuICAgIGNvcHlCb2FyZFtyb3ddW2NvbF0gPSB0aGlzLnN0YXRlLmlzRmlyc3RQbGF5ZXIgPyAxIDogLTE7XG4gICAgY29uc29sZS5sb2coY29weUJvYXJkKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYm9hcmQ6ICAgY29weUJvYXJkLFxuICAgICAgaXNGaXJzdFBsYXllcjogIXRoaXMuc3RhdGUuaXNGaXJzdFBsYXllclxuICAgIH0pO1xuICBcbiAgICB0aGlzLmNoZWNrUm93cygpO1xuICAgIHRoaXMuY2hlY2tDb2xzKCk7XG4gICAgdGhpcy5jaGVja1JpZ2h0RGlhZ3MoKTtcbiAgICB0aGlzLmNoZWNrTGVmdERpYWdzKCk7XG5cbiAgfVxuICBcbiAgc2V0V2lubmVyKHNxdWFyZSkge1xuICBcbiAgIGlmIChzcXVhcmUgPT09IDEpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgd2lubmVyOiAnZmlyc3QgcGxheWVyJ1xuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgd2lubmVyOiAnc2Vjb25kIHBsYXllcidcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgfVxuXG4gIGNoZWNrUm93cygpIHtcbiAgICBcbiAgICB2YXIgYm9hcmQgPSB0aGlzLnN0YXRlLmJvYXJkO1xuICAgIGZvciAodmFyIGk9MDsgaTxib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgXG4gICAgICBmb3IgKHZhciBjPTA7IGM8Ym9hcmRbMF0ubGVuZ3RoLTM7IGMrKykge1xuICAgICAgICB2YXIgcm93ID0gYm9hcmRbaV07XG4gICAgICAgIHZhciBzcXVhcmUgPSByb3dbY107XG4gICAgICAgIGlmIChzcXVhcmUgIT09IDApIHtcbiAgICAgICAgICBpZiAoc3F1YXJlID09PSByb3dbYysxXSAmJiBzcXVhcmUgPT09IHJvd1tjKzJdICYmIHNxdWFyZSA9PT0gcm93W2MrM10pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0V2lubmVyKHNxdWFyZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9ICAgICAgXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2hlY2tDb2xzKCl7XG4gIFxuICAgIHZhciBib2FyZCA9IHRoaXMuc3RhdGUuYm9hcmQ7XG4gICAgZm9yICh2YXIgYz0wOyBjPGJvYXJkWzBdLmxlbmd0aDsgYysrKSB7XG5cbiAgICAgIGZvciAodmFyIHI9Ym9hcmQubGVuZ3RoLTE7IHI+Mjsgci0tKSB7XG4gICAgICAgIHZhciBzcXVhcmUgPSBib2FyZFtyXVtjXTtcbiAgICAgICAgXG4gICAgICAgIGlmIChzcXVhcmUgIT09IDApIHtcbiAgICAgICAgICBpZiAoc3F1YXJlID09PSBib2FyZFtyLTFdW2NdICYmIHNxdWFyZSA9PT0gYm9hcmRbci0yXVtjXSAmJiBzcXVhcmUgPT09IGJvYXJkW3ItM11bY10pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0V2lubmVyKHNxdWFyZSk7XG5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjaGVja1JpZ2h0RGlhZ3MoKXtcbiAgICBcbiAgICAgIHZhciBib2FyZCA9IHRoaXMuc3RhdGUuYm9hcmQ7XG4gICAgICBmb3IgKHZhciByPTM7IHI8Ym9hcmQubGVuZ3RoOyByKyspIHtcbiAgICAgICAgdmFyIHJvdyA9IGJvYXJkW3JdO1xuICAgICAgICBmb3IgKHZhciBjPTA7IGM8Ym9hcmQubGVuZ3RoLTM7IGMrKykge1xuICAgICAgICAgIHZhciBzcXVhcmUgPSByb3dbY107XG4gICAgICAgICAgaWYgKHNxdWFyZSAhPT0gMCkge1xuICAgICAgICAgICAgaWYgKHNxdWFyZSA9PT0gYm9hcmRbci0xXVtjKzFdICYmIHNxdWFyZSA9PT0gYm9hcmRbci0yXVtjKzJdICYmIHNxdWFyZSA9PT0gYm9hcmRbci0zXVtjKzNdKSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0V2lubmVyKHNxdWFyZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgfVxuXG4gIGNoZWNrTGVmdERpYWdzKCkge1xuICBcbiAgICAgIHZhciBib2FyZCA9IHRoaXMuc3RhdGUuYm9hcmQ7XG4gICAgICBmb3IgKHZhciByPTA7IHI8Ym9hcmQubGVuZ3RoLTM7IHIrKykge1xuICAgICAgICB2YXIgcm93ID0gYm9hcmRbcl07XG4gICAgICAgIGZvciAodmFyIGM9MDsgYzxib2FyZFswXS5sZW5ndGgtMzsgYysrKSB7XG4gICAgICAgICAgdmFyIHNxdWFyZSA9IHJvd1tjXTtcbiAgICAgICAgICBpZiAoc3F1YXJlICE9PSAwKSB7XG4gICAgICAgICAgICBpZiAoc3F1YXJlID09PSBib2FyZFtyKzFdW2MrMV0gJiYgc3F1YXJlID09PSBib2FyZFtyKzJdW2MrMl0gJiYgc3F1YXJlID09PSBib2FyZFtyKzNdW2MrM10pe1xuICAgICAgICAgICAgICB0aGlzLnNldFdpbm5lcihzcXVhcmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gICBcbiAgICAgICAgfVxuICAgICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuICAoXG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5DT05ORUNUIDQgVE8gV0lOPC9oMT5cbiAgICAgICAgPHRhYmxlPlxuICAgICAgICAgIDxIZWFkZXJzIGRhdGE9e1swLDEsMiwzLDQsNSw2XX0gc2VsZWN0Q29sdW1uPXt0aGlzLm9uQ2xpY2t9IC8+ICAgXG5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImJvYXJkXCI+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYm9hcmQubWFwKChyb3csIGluZGV4KT0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIDxSb3cga2V5PXtpbmRleH0gZGF0YT17cm93fSByb3c9e2luZGV4fSBzZWxlY3RTcXVhcmU9e3RoaXMub25DbGlja30gLz5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+ICBcblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHsgKHRoaXMuc3RhdGUud2lubmVyKSA/ICg8aDIgY2xhc3NOYW1lPSd3aW5uZXInPldpbm5lciBpcyB7dGhpcy5zdGF0ZS53aW5uZXJ9ITwvaDI+KSA6ICA8ZGl2PjwvZGl2Pn1cbiAgICAgICAgPC9kaXY+XG5cblxuICAgICAgPC9kaXY+XG5cbiAgICAgIFxuXG4gICAgKVxuICB9XG59XG5cbnZhciBIZWFkZXJzID0gKHtkYXRhLCBzZWxlY3RDb2x1bW59KSA9PiAgKFxuXG4gIDx0cj5cbiAgICB7XG4gICAgXG4gICAgICBkYXRhLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gPHRoIGtleT17aW5kZXh9IG9uQ2xpY2s9eyAoKT0+IHtzZWxlY3RDb2x1bW4oaW5kZXgpfX0+djwvdGg+XG4gICAgICB9KVxuICAgICAgXG4gICAgfVxuICA8L3RyPlxuXG4pXG5cbnZhciBSb3cgPSAoe2RhdGEsIHJvdywgc2VsZWN0U3F1YXJlfSkgPT4gKFxuXG4gIDx0cj5cbiAgICB7XG4gICAgICBkYXRhLm1hcCggKHNxdWFyZSxpbmRleCkgPT4ge1xuXG4gICAgICAgIGlmIChzcXVhcmUgIT09IDApIHtcbiAgICAgICAgICByZXR1cm4gPHRkIGtleT17aW5kZXh9IGNsYXNzTmFtZT17KHNxdWFyZT09PTEpID8gJ3llbGxvdyc6ICdyZWQnfT48L3RkPlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiA8dGQga2V5PXtpbmRleH0+PC90ZD5cblxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgPC90cj5cblxuKVxuXG5cbndpbmRvdy5BcHAgPSBBcHA7XG4iXX0=