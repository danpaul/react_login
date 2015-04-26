var FormController = require('./lib/form_controller.jsx')
var endpointIn = 'http://0.0.0.0:3010';

var loginCallback = function(){
    console.log('login success');
}

React.render(
    <FormController endpoint={endpointIn} loginCallback={loginCallback} />,
    document.getElementById('content')
);