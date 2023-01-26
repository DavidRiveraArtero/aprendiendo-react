export function Square({children, updateBoard, index, isSelected, turn}) {
    const className = `square ${isSelected ? 'is-selected':''}  ${ turn == undefined ? '' : turn == 'x' ? 'square-green':'square-red'}`

    const handleClick = () => {
      updateBoard(index)
    }
    return(
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    )
}