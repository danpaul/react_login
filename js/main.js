var FormInput = React.createClass({displayName: "FormInput",
    getInitialState: function(){
        return {value: ''}
    },
    getRef: function(refName){
        return this.ref[refName]
    },
    handleChange: function(event){
        this.setState({value: event.target.value})
    },
    render: function(){
        return(
            React.createElement("div", null, 
                React.createElement("label", null, this.props.label), 
                React.createElement("input", {
                    type: this.props.type, 
                    name: this.props.name, 
                    ref: this.props.ref, 
                    value: this.state.value, 
                    onChange: this.handleChange
                })
            )
        )
    }
})

var LoginForm = React.createClass({displayName: "LoginForm",
    render: function(){
        return(
            React.createElement("div", {className: "sql-login-login"}, 
                React.createElement("form", {method: "POST"}, 
                    React.createElement(FormInput, {
                        name: "email", 
                        type: "text", 
                        label: "Email", 
                        ref: "email"}), 
                    React.createElement(FormInput, {
                        name: "password", 
                        type: "password", 
                        label: "Password", 
                        ref: "password"}), 
                    React.createElement("input", {type: "submit", value: "submit"})
                )
            )
        )
    }
})

var RegisterForm = React.createClass({displayName: "RegisterForm",
    handleSubmit: function(event){
        event.preventDefault()
// console.log(this.refs.password.value)
// console.log(React.findDOMNode(this.refs.password))
// console.log(React.findDOMNode(this.refs.asdf).value)
// this.refs.green.refs.inp.getDOMNode().value
// console.log(React.findDOMNode(this.refs.password.refs.password).value)
console.log(this.refs.password.refs.password)

    },
    render: function(){
        return(
            React.createElement("div", {className: "sql-login-register"}, 
                React.createElement("form", {method: "POST", onSubmit: this.handleSubmit}, 
React.createElement("input", {type: "text", name: "asdf", ref: "asdf"}), 
                    React.createElement(FormInput, {
                        name: "email", 
                        type: "text", 
                        label: "Email", 
                        ref: "email"}), 
                    React.createElement(FormInput, {
                        name: "password", 
                        type: "password", 
                        label: "Password", 
                        ref: "password"}), 
                    React.createElement(FormInput, {
                        name: "confirmPassword", 
                        type: "password", 
                        label: "ConfirmPassword", 
                        ref: "confirmPassword"}), 
                    React.createElement("input", {type: "submit", value: "Post"})
                )
            )
        )
    }
})

var FormManager = React.createClass({displayName: "FormManager",
    getInitialState: function(){
        return({ activeForm: 'register' })
    },
    handleMenuClickLogin: function(event){
        this.setState({activeForm: 'login'})
    },
    handleMenuClickRegister: function(event){
        this.setState({activeForm: 'register'})
    },
    render: function(){
        var self = this

        var formVisible = {}
        var test = ['login', 'register']
        test.forEach(function(formType){
            formVisible[formType] = (formType === self.state.activeForm);
        })

        return(
            React.createElement("div", {className: "sql-login-wrap"}, 
                React.createElement("div", {className: "sql-login-menu"}, 
                    React.createElement("div", {
                        className: "sql-login-menu-login", 
                        onClick: this.handleMenuClickLogin
                    }, "Login"), 
                    React.createElement("div", {
                        className: "sql-login-menu-register", 
                        onClick: this.handleMenuClickRegister
                    }, "Register")
                ), 
                React.createElement("div", {style: 
                    formVisible['login'] ?
                        {display: 'inherit'} : {display: 'none'}
                }, React.createElement(LoginForm, null)), 
                React.createElement("div", {style: 
                    formVisible['register'] ?
                        {display: 'inherit'} : {display: 'none'}
                }, React.createElement(RegisterForm, null))
            )
        )
    }
})

React.render(
    React.createElement(FormManager, null),
    document.getElementById('content')
);