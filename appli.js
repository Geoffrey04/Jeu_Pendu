// Définir le tableau :

var wordsrandom = ['siryaque', 'mort', 'imberbe','prison','torture','tama',
                   'cadavre','cyrano','homicide','javascript','iphone','cymbale',
                    'charleston','baguettes'];


var tablet = [];

// Choisir un mot random parmi les choix du tableau :

var random = wordsrandom[Math.floor(Math.random()*wordsrandom.length)];

// Variables :

var ptsvictory = 0;
var life = 0;

// Fonction reset et focus :


function reset()
{
    document.getElementById('answer').value = '';
}

function focus () {
    document.getElementById('answer').focus();
}


// fonction anti-cheat :


function verif() {
for (var g = 0; g < tablet.length ; g++) {
        if(mot == tablet[g])
            return true ;
    }
}

// Fonction du jeu pendu :

var mot = document.getElementById('answer').value;


document.getElementById('send').addEventListener("click",

    function() {

         mot = document.getElementById('answer').value;

        if(!verif()) {

            for (var i = 0; i < random.length; i++) {


                console.log(random);


                if (mot == random[i]) {


                    document.getElementById('lettre' + i).innerHTML = mot;
                    tablet.push(mot);
                    console.log(tablet);
                    ptsvictory++;
                }


                else {
                    document.getElementById('Indication').innerHTML = '';
                }

                if (random.length === ptsvictory) {
                    document.getElementById('win').innerHTML = "You Win!!";
                    document.getElementById('win').style.color = 'green';
                    document.getElementById('gif').style.height = '300px';

                }
            }

            reset();

            if (random.indexOf(mot) === -1) {
                document.getElementById('Indication').innerHTML = "La lettre entrée n'est pas dans le mot cherché";
                life++;
                console.log(life)

            }

            document.getElementById('luck').innerHTML = 'Vous avez utilisé ' + ' ' + life + ' ' + ' vies sur 10';

            if (life >= 10) {
                document.getElementById('Indication').innerHTML = "You loose!";
                document.getElementById('Indication').style.color = 'white';
                document.getElementById('Indication').style.backgroundColor = 'black';
                document.getElementById('photo').style.height = '300px';
            }

            focus();

        }}) ;

// boucle pour cacher le mot random :

for (var i= 0; i < random.length;i++) {
    document.getElementById('lettre' + i).innerHTML= '_ ';
}



// Fonction reset page  :

document.getElementById('buttonR').addEventListener("click",
function resette ()
{
    document.location.reload(true)

});





