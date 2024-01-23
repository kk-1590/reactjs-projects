import './styles.css';
const Square = ({value}) => {
    return <button className="square">{value}</button>
}

const TicTacToe = () => {
  return (
    <div className="tic-tac-toe-container">
        <div className="row">
            <Square />
            <Square />
            <Square />
        </div>
        <div className="row">
            <Square />
            <Square />
            <Square />
        </div>
        <div className="row">
            <Square />
            <Square />
            <Square />
        </div>
    </div>
  )
}

export default TicTacToe
