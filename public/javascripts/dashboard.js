function fetchUserList(){
    
    console.log('here');
    $.ajax('/users/fetch').done(function(data) {
        console.log(data);
        data.users.forEach(function(user){
            $('.user-list').append('<li class="user-item"><h2>'+user.username+'</h2><p>'+user.email+'</p></li>');
        })
        
    });
};

window.onload = fetchUserList();
    
