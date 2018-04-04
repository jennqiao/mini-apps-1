class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    
        board: [[0,0,0,0,0,0,0], [0,0,0,0,0,0,0], [0,0,0,0,0,0,0],[0,0,0,0,0,0,0], [0,0,0,0,0,0,0], [0,0,0,0,0,0,0]],
        isFirstPlayer: true,
        winner: null
      
    }
    this.onClick = this.onClick.bind(this);

  }

  
  onClick(col) {
    
    var copyBoard =  this.state.board.slice(0);
    var row = 0;
    for (var i=0; i<copyBoard.length; i++) {
      if (copyBoard[i][col] === 0) {
        row = i;
      }
    }    
  
    copyBoard[row][col] = this.state.isFirstPlayer ? 1 : -1;
    console.log(copyBoard);

    this.setState({
      board:   copyBoard,
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
      })
    } else {
      this.setState({
          winner: 'second player'
        })
    }

  }

  checkRows() {
    
    var board = this.state.board;
    for (var i=0; i<board.length; i++) {
      
      for (var c=0; c<board[0].length-3; c++) {
        var row = board[i];
        var square = row[c];
        if (square !== 0) {
          if (square === row[c+1] && square === row[c+2] && square === row[c+3]) {
            this.setWinner(square);
          }
        }      
      }
    }
  }

  checkCols(){
  
    var board = this.state.board;
    for (var c=0; c<board[0].length; c++) {

      for (var r=board.length-1; r>2; r--) {
        var square = board[r][c];
        
        if (square !== 0) {
          if (square === board[r-1][c] && square === board[r-2][c] && square === board[r-3][c]) {
            this.setWinner(square);

          }
        }
      }
    }
  }

  checkRightDiags(){
    
      var board = this.state.board;
      for (var r=3; r<board.length; r++) {
        var row = board[r];
        for (var c=0; c<board.length-3; c++) {
          var square = row[c];
          if (square !== 0) {
            if (square === board[r-1][c+1] && square === board[r-2][c+2] && square === board[r-3][c+3]) {
              this.setWinner(square);
            }
          }
        }
      }

  }

  checkLeftDiags() {
  
      var board = this.state.board;
      for (var r=0; r<board.length-3; r++) {
        var row = board[r];
        for (var c=0; c<board[0].length-3; c++) {
          var square = row[c];
          if (square !== 0) {
            if (square === board[r+1][c+1] && square === board[r+2][c+2] && square === board[r+3][c+3]){
              this.setWinner(square);
            }
          }   
        }
      }
  }

  render() {

    return  (

      <div>
        <h1>CONNECT 4 TO WIN</h1>
      
        <table>
          <tbody>
          <Headers data={[0,1,2,3,4,5,6]} selectColumn={this.onClick} />   
          {
            this.state.board.map((row, index)=> {
              return <Row key={index} data={row} row={index} selectSquare={this.onClick} />
            })
          }
          </tbody>
        </table>  

        
        <div>
          { (this.state.winner) ? (<div>Winner is {this.state.winner}!</div>) :  <div></div>}
        </div>


      </div>

      

    )
  }
}

var Headers = ({data, selectColumn}) =>  (

  <tr>
    {
    
      data.map((row, index) => {
        return <th key={index} onClick={ ()=> {selectColumn(index)}}>v</th>
      })
      
    }
  </tr>

)

var Row = ({data, row, selectSquare}) => (

  <tr>
    {
      data.map( (square,index) => {

        if (square !== 0) {
          return <td key={index} className={(square===1) ? 'yellow': 'red'}></td>
        } else {
          return <td key={index}></td>

        }
      })
    }
  </tr>

)


window.App = App;
