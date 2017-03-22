'use strict';

exports.userGET = function(args, res, next) {
  /**
   * authentifier un user
   * Lecture des produits
   *
   * login String login du user.
   * password String password du user.
   * returns Boolean
   **/
  var examples = {};
  
  if( ( 'toto' == args.login.value) && ( 'titi' == args.password.value)) {
//	console.log('login=' + JSON.stringify(args.login.value));
//	console.log('password=' + JSON.stringify(args.password.value));
	examples['application/json'] = true;
  } else {
	examples['application/json'] = false;
  }
  
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || false, null, 2));
  } else {
    res.end();
  }
}

