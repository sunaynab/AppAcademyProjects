import React from 'react';

class Headers extends React.Component {
  render() {
    let selected = this.props.selectedPane;
    let headers = this.props.panes.map((pane, index) => {
      let title = pane.title;
      let klass = '';
      if (index === selected) {
        klass = 'active';
      }

      return (
        <li
          key={index}
          className={klass}
          onClick={this.props.onTabChosen.bind(null, index)}>
          {title}{' '}
        </li>
      );
    });
    return (
      <ul className='tab-header'>
        {headers}
      </ul>

    );
 }
}

class Tabs extends React.Component {
  constructor(props) {
    super (props);
    this.state = { selected: 0 };
    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(num) {
    this.setState({selected: num});
  }

  render() {
    let pane = this.props.panes[this.state.selected];

    return (
      <div className= 'TABS'>
        <h1>Tabs</h1>
        <div className= 'tabs'>
          <Headers
              selectedPane={this.state.selected}
              onTabChosen={this.selectTab}
              panes={this.props.panes}>
            </Headers>
            <div className='tab-content'>
              <article>
                {pane.content}
              </article>
            </div>
        </div>
      </div>
    );
  }
}

export default Tabs;
