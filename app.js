

// var Grocerylist = (props) => {
//   var onListItemClick = (event) => {
//     console.log('i got clicked');
//   }
//   return (
//     <ul>
//       <li onClick = {onListItemClick} > {props.groceries[0]}</li>
//       <li>{props.groceries[1]}</li>
//     </ul>
//   )
// };
//
//
//
//


class GroceryListItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
      <li>{this.props.list.grocery}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.groceries.map(grocery =>
    <GroceryListItem key = {grocery.thing} list={grocery}/>
  )}
  </ul>
);

const myGroceries = [{grocery: 'milk' , grocery: ''}]
// var App = () => (
//   <div>
//     <h2> My Grocery List </h2>
//     <Grocerylist groceries = { ['Oranges', 'Apples'] } />
//   </div>
// );

ReactDOM.render(<GroceryListItem />, document.getElementById('app'));
