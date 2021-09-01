import './App.css';
import contents from './contents.json'
import {withStyles, makeStyles,} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const ColorButton = withStyles((theme) => ({
  root: {
    color: '#d39a41',
    '&:hover': {
    },
  },
}))(Button);

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1 className="media">MEDIA APPEREANCES</h1>
        <button className="menu-icon">
          <svg viewBox="0 0 100 80" width="40" height="40">
              <rect width="100" height="20"></rect>
              <rect y="30" width="100" height="20"></rect>
              <rect y="60" width="100" height="20"></rect>
          </svg>
      </button>
      </div>
      <div className="box-container">
        {contents["contents"].map((content, index) => {
          return(
            <div className="box-with-button" key={index}>
              <div className="box" key={index}>
                <h3 className="orange-text">{content.title}</h3>
                <h3 className="orange-text">{content.title}</h3>
                <h3 className="orange-text">{content.title}</h3>
                <span className="white-text">{content.text}</span>
              </div>
              <ColorButton>{content.buttonTxt}</ColorButton>
            </div>
          )

        })}
      </div>
    </div>
  );
}

// ReactDOM.render(<App />, document.querySelector('#app'));

export default App;
