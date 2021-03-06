var express = require('express');
var router = express.Router();

/* JSON requset: Delte event or photo */
/* return success or error */
router.post('/', function(req, res,next){
    var pic = req.picshare.DeleteManager

    if(req.param('type') == 'photo') {
        pic.deletePhoto(req.param('photoId'), {
            success: function(){
                res.send({result : "success"});
            },
            error: function(err) {
                res.send({result : "failed", error :err});
            }
        });
    }   
});

module.exports = router;
