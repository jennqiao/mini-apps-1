class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    
        board: [[0,0,0,0,0,0,0], [0,0,0,0,0,0,0], [0,0,0,0,0,0,0],[0,0,0,0,0,0,0], [0,0,0,0,0,0,0], [0,0,0,0,0,0,0]],
        isFirstPlayer: true
      
    }
    this.onClick = this.onClick.bind(this);
  }

  
  onClick(row,col) {
    console.log('clicked!', row, col);
  
    var copyBoard =  this.state.board.slice(0);
    copyBoard[row][col] = this.state.isFirstPlayer ? 1 : -1;
    console.log(copyBoard);
    this.setState({
      board:   copyBoard,
      isFirstPlayer: !this.state.isFirstPlayer
    });

  }

  render() {

    return  (

      <div>
        <h1>CONNECT 4 TO WIN</h1>
      
        <table>
          <tbody>
          <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>

          </tr>
          
          {
            this.state.board.map((row, index)=> {
              return <Row data={row} row={index} selectSquare={this.onClick} />
            })
          }
          </tbody>
        </table>  
      </div>

    )
  }
}

var Row = ({data, row, selectSquare}) => (

  <tr>
    {
      data.map( (square,index) => {
        return <td onClick={ () => selectSquare(row,index)}>{square}</td>
      })
    }
  </tr>

)


window.App = App;
