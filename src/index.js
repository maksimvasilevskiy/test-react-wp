const { render } = wp.element; //we are using wp.element here!
import App from './App';

if (document.getElementById('test-react')) { //check if element exists before rendering
  render(<App />, document.getElementById('test-react'));
}
