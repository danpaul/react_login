var FormInput = require('./input.jsx');

module.exports = React.createClass({
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