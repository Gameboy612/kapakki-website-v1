

'use strict';

const e = React.createElement;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }
    console.log('loaded')
    return (
        <div id='sidebar' class="open">
            test
        </div>
      );
  }
}


const domContainer = document.querySelector('#sidebar');
const root = ReactDOM.createRoot(domContainer);
root.render(e(Sidebar));