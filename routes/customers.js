const router = require('express').Router();
const customersCtrl = require('../controllers/customers');


router.get('/customers', customersCtrl.index);
router.get('/new', customersCtrl.new);
router.get('/:id', customersCtrl.show);
router.post('/', customersCtrl.create);
// router.post('/attributes', isLoggedIn, customersCtrl.addAttribute);
// router.delete('/attributes/:id', isLoggedIn, customersCtrl.delAttribute);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router;