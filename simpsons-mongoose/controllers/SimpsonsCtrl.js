var Simpson = require('../models/Simpson');

module.exports = {

    create: function(req, res) {
        var newSimpson = new Simpson(req.body);
        newSimpson.save(function(err, result) {
            if (err) return res.status(500).send(err);
            else res.send(result);
        });
    }

    // read: function(req, res) {
    //     Simpson.find(req.query)
    //         .exec(function(err, result) {
    //             if (err) return res.status(500).send(err);
    //             else res.send(result);
    //         });
    // }

    // update: function(req, res) {
    //     Simpson.findByIdAndUpdate(req.params.id, req.body,
    //         function(err, result) {
    //             if (err) return res.status(500).send(err);
    //             else res.send(result);
    //         });   
    // },

};
