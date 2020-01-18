const Customer = require('../models/customer');

module.exports = {
  index,
  create,
  delCustomer,
  show,
  new: newCustomer
};

function newCustomer(req, res) {
  res.render('customers/new', {title: 'Add Customer'});
}

function index(req, res) {
  Customer.find({}, function(err, customers) {
    res.render('customers/index', { title: 'All SSO Customers', customers });
  });
}

function show(req, res) {
  Customer.findById(req.params.id, function(err, customer) {
      console.log(customer);
      res.render("customers/show", {
        user: req.user,
         customer
         });
      })  
}

function create(req, res) {
  const customer = new Customer(req.body);
  customer.save(function(err) {
    if (err) return res.redirect('/customers/new');
    console.log(customer);
    res.redirect(`/customers/${customer._id}`);
    })
  }

function delCustomer(req, res) {
  console.log(req.params.id);
  console.log(req.user.customers);
    req.user.customers.splice(req.params.id, 1);

    req.user.save(function(err){
      res.redirect('/customers');
    })
    
}
