//controllers/BasicController.js

module.exports = {
    home: (req, res) => {
       res.render('home');
    },
    second: (req, res) => {
        res.render('second');
    },
        third: (req, res) => {
           res.render('third');  
        },
};
