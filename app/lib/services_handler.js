var STATUS_SUCCESS = 'success',
    STATUS_FAILURE = 'failure',
    STATUS_ERROR = 'error';

module.exports = {
    register: function(endpoint, email, password, callback){
        $.ajax({
            method: 'POST',
            url: endpoint + '/register',
            data: {
                email: email,
                password: password
            },
            success: function(response){
                if( response.status === STATUS_SUCCESS ){
                    callback();
                } else if(response.status === STATUS_FAILURE || 
                          response.status === STATUS_ERROR ){
                    callback(response.message);
                } else {
                    callback('An error occurred.');
                }
            },
            error: function( jqXHR, status, errorThrown){
                callback('Error contacting server. You might want to try again.');
            }
        })

    }
}