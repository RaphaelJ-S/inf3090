var express = require('express');

//body parser
var app=express();
var bodyParser = require('body-parser');
var path = require('path');

var router = express.Router();
var fs = require('fs');

//variables de lecture du fichier commandes.json
var fcommandes = __dirname + "/../public/commandes.json";
var commandesdata = fs.readFileSync(fcommandes, 'utf8');
var commandejson = JSON.parse(commandesdata);

//variables de lecture du fichier bd.json
var fbd = __dirname + "/../public/bd.json";
var bddata = fs.readFileSync(fbd, 'utf8');
var bdjson = JSON.parse(bddata);

//variable de lecture du fichier head.html
var fhead = __dirname + "/../public/HTML/head.html";
var head = fs.readFileSync(fhead, 'utf8');

//variable de lecture du fichier tail.html
var ftail = __dirname + "/../public/HTML/tail.html";
var tail = fs.readFileSync(ftail, 'utf8');

//body parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.text({ type: 'text/html' }));


//Toutes les pages sont construites ici, sauf gérant.html


router.get('/', function(req, res, next) {
	var content = "";
	
	res.render('index', function(err, html) {
		if(err) throw err;
		
		content += "<h2>Articles en vente</h2><br><hr>";
		for(article of bdjson) {
			content += "<div class='presPageAccueil'>"+
				"<img src='../images/"+article.image+"' alt='"+article.description+"'>"+
				"<ul class='presArticlePageAccueil'>"+
				"</span><li>Identificateur: " + article.id + "</li>"+
				"<li>Nom: " + article.nom + "</li>"+
				"<li>Marque: " + article.marque + "</li>"+
				"<li>Prix: <del>"+Math.floor(Math.random() * (25 - 6 +1)) +6 + "$</del>"+
				" "+ article.prix + "$</li>"+
				"<li>Description: " + article.description + "</li>"+
				"</ul>"+
				"</div><hr>";
		}
		res.send(head + content + tail);
	});
});

router.post('/', function(req, res, next) {
	var content = "";
	
	res.render('index', function(err, html) {
		if(err) throw err;
		
		content += "<h2>Articles en vente</h2><br><hr>";
		for(article of bdjson) {
			content += "<div class='presPageAccueil'>"+
				"<img src='../images/"+article.image+"' alt='"+article.description+"'>"+
				"<ul class='presArticlePageAccueil'>"+
				"</span><li>Identificateur: " + article.id + "</li>"+
				"<li>Nom: " + article.nom + "</li>"+
				"<li>Marque: " + article.marque + "</li>"+
				"<li>Prix: <del>9999.04$</del> " + article.prix + "$</li>"+
				"<li>Description: " + article.description + "</li>"+
				"</ul>"+
				"</div><hr>";
		}
		res.send(head + content + tail);
	});
});

router.get('*/covid*/?*', function (req, res, next){
	res.redirect('https://www.quebec.ca/sante/problemes-de-sante/a-z/coronavirus-2019/');
});

router.get('/contact', function (req, res, next) {
	
	var content = "";
	
	res.render('index', function(err,html) {
		if(err) throw err;

		content += 

			"<address id='addrContact'><h3>Pour nous rejoindre</h3>"+
			"Adresse: 167 chemin du nuage, Atlantis<br>"+
			"Téléphone: 514-654-4321<br>"+
			"Courriel: QuébecInformatique@gmail.com<br>"+
			"</address><br><hr>"+
			"<img src='../images/brain-solid.svg'"+
			"alt='un cerveau avec un QI à l'intérieur'>";
		res.send(head + content + tail);
	});
});

router.get('/commandes', function(req, res, next) {
	
	var content = "";
	var liste = "";
	
	res.render('index', function(err, html) {
		if(err) throw err;
		
		for(article of bdjson) {
			liste += "<option value='"+article.id+
			"'>"+article.id+"("+article.nom+")</option>";
		};
		
		content += 
			"<form class='formDemande' action='/commandes' method='post'>"+
			"<ul>"+
			"<li>"+
			"<label for='articles'>Article</label>"+
			"<select id='articles' name='electronique tabindex=0'>"+
			liste+
			"</select>"+
			"<span>Choisissez un des article</span>"+
			"</li><li>"+
			"<label for='nombre'>Quantité</label>"+
			"<input type='number' id='nombre' name='quantité' tabindex=0 required>"+
			"<span>Entrer la quantité d'articles voulue"+
			"</li><li>"+
			"<label for='unNom'>Prénom</label>"+
			"<input type='text' id='unNom' name='prenom' tabindex=0 required>"+
			"<span>Entrer votre prénom</label>"+
			"</li>"+
			"<input type='submit' value='Soumettre' tabindex=0>"+
			"<input type='reset'tabindex=0>"+
			"</ul>"+
			"</form>";
		res.send(head + content + tail);
	});
	
});

router.post('/commandes', urlencodedParser, function(req, res, next) {
	var jsonRequest = req.body;
	var nbrCommandes = commandejson.articles.length + 1;
	var content = "";

	res.render('index', function(err, html) {
		if(err) throw err;
		content += 
			"<br><h4 class='headerCommande'>Informations de la commande</h5><br>"+
			"<ul class='presContent'>"+
			"<li><em>Prénom</em>: " + jsonRequest.prenom + "</li>"+
			"<li><em>Quantité</em>: " + jsonRequest.quantité + "</li>"+
			"<li><em>Identificateur</em>: " + jsonRequest.electronique + "</li>"+
			"<li><em>Numéro de la commande</em>: " + nbrCommandes + "</li>"+
			"<li><em>Courriel pour le paiement</em>: QuébecInformatique@gmail.com</li>"+
			"</ul>"+
			"<br><h4 class='headerCommande'>Informations pour le paiement</h5><br>"+
			"<p>"+
			"Vous devez envoyer le paiement par interact à l'adresse donnée."+
			"  Dans ce courriel, vous devez envoyer une question"+
			" qui mentionne le numéro de la commande et la réponse"+
			" doit correspondre à l'indentifiant du premier article."+
			"</p>";
					
		res.send(head + content + tail);
	});
});

router.post('/statut/:numerocommande', function(req, res, next) {
	var indice = req.params.numerocommande;
	var commandes = commandejson.articles;
	
	
	if(indice <= commandes.length && indice != 0) {
		res.send(JSON.stringify(commandes[indice - 1]));
	} else {
		res.send("Cette commande n'existe pas!");
	};
});

router.get('/statut/:numerocommande', function(req, res, next) {
	var indice = req.params.numerocommande;
	var commandes = commandejson.articles;
	var content = "";

	res.render('index', function(err, html) {
		if(indice <= commandes.length && indice != 0) {
			var informations = commandes[indice - 1];
			var imageArticle = informations.commande.image;
			var descriptionArticle = informations.commande.description;
			content += 
				"<div class='statutContent'>"+
				"<div class='statutImg'>"+
				"<img id='imgCommande' src='../images/"+imageArticle+"' alt='"+descriptionArticle+"'>"+
				"</div>"+
				"<div class='statutBody'>"+
				"<ul class='presContent'>"+
				"<li><em>Prénom</em>: " + informations.prenom + "</li>"+
				"<li><em>Date et heure de ramassage</em>: " + informations.ramassage + "</li>"+
				"<li><em>Statut</em>: " + informations.statut + "</li>"+
				"</ul>"+
				"</div>"+
				"</div>";
		} else {
			content += "<h1 style='color:red' >Cette commande n'existe pas</h1>";
		}
		res.send(head + content + tail);
	});

});

router.get('/enpreparation', function(req, res, next) {
	var commandes = commandejson.articles;
	var content = 
		"<table class='tabPrep'>"+
		"<caption>Commandes en préparation</caption>"+
		"<tr>"+
		"<th>Numero</th>"+
		"<th>Prénom</th>"+
		"<th>Ramassage</th>"+
		"</tr>";
		
	
	res.render('index', function(err, html) {
		
		for(article of commandes) {
			if(article.statut == "préparation") {
				content +=
					"<tr>"+
					"<td>" + article.numero + "</td>"+
					"<td>" + article.prenom + "</td>"+
					"<td>" + article.ramassage + "</td>"+
					"</tr>";
			}
		}
		
		content = 
			"<div class='presTab'>"+
			content +
			"</table>"+
				   "</div>";
		res.send(head + content + tail);
	});
});

module.exports = router;
