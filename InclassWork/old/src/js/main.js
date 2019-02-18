//Can use all of this code in <script></script> (on other page)

var root = document.getElementById('root');
var content = React.createElement('h1', {}, "Welcome to 4385");

//What do you have for me to draw? 
//Where are we drawing it? 
ReactDOM.render(content, root);