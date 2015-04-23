var FormInput = React.createClass({
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
            <div>
                <label>{this.props.label}</label>
                <input
                    type={this.props.type}
                    name={this.props.name}
                    ref={this.props.ref}
                    value={this.state.value}
                    onChange={this.handleChange}
                ></input>
            </div>
        )
    }
})

var LoginForm = React.createClass({
    render: function(){
        return(
            <div className="sql-login-login">
                <form method="POST">
                    <FormInput
                        name="email"
                        type="text"
                        label="Email"
                        ref="email"/>
                    <FormInput
                        name="password"
                        type="password"
                        label="Password"
                        ref="password"/>
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
})

var RegisterForm = React.createClass({
    handleSubmit: function(event){
        event.preventDefault()
// console.log(this.refs.password.value)
// console.log(React.findDOMNode(this.refs.password))
// console.log(React.findDOMNode(this.refs.asdf).value)
// this.refs.green.refs.inp.getDOMNode().value
// console.log(React.findDOMNode(this.refs.password.refs.password).value)
// console.log(this.refs.password.refs.password)

    },
    render: function(){
        return(
            <div className="sql-login-register">
                <form method="POST" onSubmit={this.handleSubmit} >
                    <FormInput
                        name="email"
                        type="text"
                        label="Email"
                        ref="email"/>
                    <FormInput
                        name="password"
                        type="password"
                        label="Password"
                        ref="password"/>
                    <FormInput
                        name="confirmPassword"
                        type="password"
                        label="ConfirmPassword"
                        ref="confirmPassword"/>
                    <input type="submit" value="Post" />
                </form>
            </div>
        )
    }
})

module.exports = React.createClass({
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
            <div className="sql-login-wrap">
                <div className="sql-login-menu">
                    <div
                        className="sql-login-menu-login"
                        onClick={this.handleMenuClickLogin}
                    >Login</div>
                    <div
                        className="sql-login-menu-register"
                        onClick={this.handleMenuClickRegister}
                    >Register</div>
                </div>
                <div style={
                    formVisible['login'] ?
                        {display: 'inherit'} : {display: 'none'}
                }><LoginForm /></div>
                <div style={
                    formVisible['register'] ?
                        {display: 'inherit'} : {display: 'none'}
                }><RegisterForm /></div>
            </div>
        )
    }
})