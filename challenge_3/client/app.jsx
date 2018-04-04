class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    
        board: [[0,0,0,0,0,0,0], [0,0,0,0,0,0,0], [0,0,0,0,0,0,0],[0,0,0,0,0,0,0], [0,0,0,0,0,0,0], [0,0,0,0,0,0,0]],
        isFirstPlayer: true
      
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
              return <Row data={row} row={index} selectSquare={this.onClick} />
            })
          }
          </tbody>
        </table>  
      </div>

    )
  }
}

var Headers = ({data, selectColumn}) =>  (

  <tr>
    {
    
      data.map((row, index) => {
        return <th onClick={ ()=> {selectColumn(index)}}>{index+1}</th>
      })
      
    }
  </tr>

)

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
