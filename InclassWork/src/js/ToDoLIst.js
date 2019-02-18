        /*
        ReactDOM.CreateElement(
            1.What html element do you want to make?
            2. Are there any attribute/properties you to need pass so that I can configure this new element?
            3. What content shall I place into this element? OR 
            4. Children
    
        */
        //Content = What do you want to show? 
        //Root = Where do yo want to show it? 

  /*      function Welcome(props){
            return <h1>Hello, {props.name} </h1>;
        }
*/
        class ToDoList extends React.Component{
            render(){
                React.createElement('ul', {}, [
                    React.createElement('li', {}, "First Thing"),
                    React.createElement('li', {}, "Second Thing"),
                ]
            };
        }

    

    export default ToDoList;