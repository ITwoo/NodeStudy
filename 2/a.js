var relationship1 ={
    name : 'zero',
    friends: ['nero','hero','xero'],
    logFriends: function(){
        var that = this;
        console.log(this)
        this.friends.forEach(friend => {
            console.log(this.name,friend)
        });
    },
};
relationship1.logFriends();