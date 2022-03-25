import "./ProgressBar.css";

function ProgressBar(props) {
  const style = {
    width: props.progress + "%",
    backgroundColor: props.color,
  }

  return ( 
    <div className="ProgressBar">
      <div style={style}></div>
    </div>
  )
}

export default ProgressBar;