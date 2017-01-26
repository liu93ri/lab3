
/*
 * GET home page.
 */

exports.view = function(req, res){
	var nameToshow = req.params.userName;
	if (nameToshow == undefined) {
		nameToshow = 'World';
	}

	console.log("name is " + nameToshow);

  res.render('index', {
  	'name': nameToshow,
  });
};
