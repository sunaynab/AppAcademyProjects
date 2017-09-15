import React from 'react';


class ItemDetail extends React.Component {
  constructor(props) {
    super(props);
  }




  render() {
    const items = this.props.items;

    const itemsRender = items.map( item => {

    if (items === undefined) {
      return null;
    }

      return (<img src={item.image_url} />);
      }
    );


    return (
        <div>
          <h2>Items</h2>
          {itemsRender}
        </div>
    );

  }
}

export default ItemDetail;
