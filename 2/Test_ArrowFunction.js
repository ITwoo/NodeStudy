var relationship1 ={
    name : 'zero',
    friends: ['nero','hero','xero'],
    logFriends: function(){
        var that = this;
        console.log(this)
        this.friends.forEach(function(friend){
           console.log(this)
        });
    },
};
relationship1.logFriends();