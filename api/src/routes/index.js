const {Router} = require('express');
const router = Router();
const axios = require('axios');

let tweets = [{user:'jose', tweet: 'nublado'}];
let tokens = [];

router.get('/tweets', (req,res)=>{
    res.status(200).json(tweets);

});

router.post('/tweets/post',(req, res)=>{
    const {user, tweet, token} = req.body;
    tweets.push({user, tweet});
    if(!tokens.some(element=>element.user==user)){
        tokens.push({user, token});
    }
   
    tokens.map(element =>{
        if(element.user!=user){
            axios({
                method: 'post',
                url: 'https://fcm.googleapis.com/fcm/send',
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': 'key=AAAAQNywphA:APA91bHj_N0zDnKabk1KnG49QkTwRGElvx3knV2-ld-v9ONgHb1LsoFKzEsABkHtTS1CeH_GwnI9iMrf6RncKPh2774HpTss6RvhYJRwVHbKjRyGr_RnAttVBl3kx0R6_cer0b4H1w9E'
                },
                data: JSON.stringify({
                    "to":element.token,
                    "notification": {
                        "title": "Nuevo tuit!",
                        "body": user +" ha tuiteado: " + tweet,
                        "click_action": "http://127.0.0.1:8000/index.html"
                    }
                })
        
            }).then()
            .catch(err => {console.log(err)});

        }
        
    })
    
    

})

module.exports = router;