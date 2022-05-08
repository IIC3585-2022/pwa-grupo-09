export const post_tweet = (user, tweet, token) =>{
    fetch('http://localhost:5000/tweets/post',{
        method: 'post',
        body: JSON.stringify({
            user: user,
            tweet:tweet,
            token: token
        }),
        headers: {
            "accept": "application/json",
            'Content-Type': 'application/json'
        }
    }).then(response =>{
        fetch('./index.html').then(response =>{
            response.text().then(data=>{
                

            })
        }
        )    
    })
    .catch((err)=>{
        console.log('An error occurred while retrieving token. ', err);
    })};



 



