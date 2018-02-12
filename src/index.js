import React from 'react';
import ReactDOM from 'react-dom';

import './style.less';

const NUM_CELLS = 11;

export default class App extends React.Component {
  buildCell(direction, columnNumber) {
    const cls = `rotator ${direction}`;
    return (
      <div className="cell" key={ columnNumber }>
        <div className={ cls }></div>
      </div>
    );
  };

  buildRow(rowNumber) {
    const cells = Array.from({ length: NUM_CELLS }, (x, i) => {
      const direction = (rowNumber + i) % 2 === 1 ? 'left' : 'right';
      return this.buildCell(direction, i);
    });
    return (
      <div className="row" key={ rowNumber }>
        { cells }
      </div>
    );
  };

  buildTable() {
    return Array.from({ length: NUM_CELLS }, (x, i) => {
      return this.buildRow(i);
    });
  };

  render() {
    return <div>{ this.buildTable() }</div>;
  };
};

ReactDOM.render(<App />, document.getElementById('root'));
