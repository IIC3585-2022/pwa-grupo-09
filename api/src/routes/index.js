const {Router} = require('express');
const router = Router();

const tweets = [];
const tokens = [];

router.get('/tweets', (req,res)=>{
    res.status(200).json(tweets);
    
});

router.post('/tweets/post',(req, res)=>{
    const {user, tweet, token} = req.body;
    tweets.push({user, tweet});
    if(!token.some(element=>element.user==user)){
        token.push({user, token});
    }
    

})

module.exports = router;