import React, { Component } from 'react';

class SearchItem extends Component {
  render() {
    return(
      <div>
        <div className="autocomplete">
          <div className={"result-container " + this.props.autocomplete}>
          {
            this.props.results.slice(0, 3).map((found) =>
              <a key={found.id} href={'/'+found.cat+'/'+found.id} onMouseDown={event => event.preventDefault()}>
                <div className="autocomplete-item">
                  {found.name}
                </div>
              </a>
            )
          }
          </div>
        </div>
      </div>
    );
  }
}

export default SearchItem;
