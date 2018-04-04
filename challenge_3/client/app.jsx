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
    console.log('clicked!', col);
    
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

  }

  checkRows() {
    
    var board = this.state.board;
    for (var i=0; i<board.length; i++) {
      
      for (var c=0; c<board[0].length-3; c++) {
        var row = board[i];
        var square = row[c];
        if (square !== 0) {
          if (square === row[c+1] && square === row[c+2] && square === row[c+3]) {
            if (square === 1) {
              this.setState({
                winner: 'firstPlayer'
              })
            } else {
              this.setState({
                  winner: 'secondPlayer'
                })
            }
          }
        }      
      }
    }
  }

  checkCols(){
  
    var board = this.state.board;
    for (var c=0; c<board[0].length; c++) {

      for (var r=board.length-1; r>=0; r--) {
        var square = board[r][c];
        
        if (square !== 0) {

          
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
          { (this.state.winner) ? (<div>Winner!</div>) :  <div></div>}
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
