var ColorPracticeRepeats = 4
var WordPracticeRepeats = 4
var ColorWordPracticeRepeats = 2

// Since there are 4 possible trials, the number of trials will be 4 times the number of repeats
var ColorTestRepeats = 8
// Since there are 4 possible trials, the number of trials will be 4 times the number of repeats
var WordTestRepeats = 8
// Since there are 16 possible trials, the number of trials will be 4 times the number of repeats
var ColorWordTestRepeats = 4


var FullScreenMode = false;

var keyboard_path = "./assets/images/StroopColorsKeyboard.png"

function debrief_standard(data, congruency=false){
  var total_trials = data.count();
  var NumberCorrect = data.filter({correct: true}).count()
  var accuracy = Math.round(NumberCorrect / total_trials * 100);

  if (!congruency){
    return(
      "<p>Du svarte riktig på <strong>" + accuracy + "%</strong> av de " + total_trials + " forsøkene.</p> " +
      "<p>Trykk på en tast for å fortsette eksperimentet. </p>"
    )
  }

  var congruent_rt = Math.round(jsPsych.data.get().filter({correct: true, Congruency: 'Con'}).select('rt').mean());
  var incongruent_rt = Math.round(jsPsych.data.get().filter({correct: true, Congruency: 'Incon'}).select('rt').mean());

  return([
    "<p>Du svarte riktig på <strong>" + accuracy + "%</strong> av de " + total_trials + " forsøkene.</p> " +
    "<p>Gjennomsnittlig responstid for kongruente forsøk var <strong>" + congruent_rt + "ms</strong>.</p>" +
    "<p>Gjennomsnittlig responstid for inkongruente forsøk var <strong>" + incongruent_rt + "ms</strong>.</p>" +
    "<p>Trykk på en tast for å fortsette eksperimentet.</p>"
  ])
}

var ColorInstrText = [
      '<p>Velkommen til Stroop-fargeeksperimentet.</p>',
      '<p>Du vil identifisere fargen på rektangler som vises på skjermen. Når et rektangel vises på skjermen, skal du trykke på tasten som tilsvarer den fargen, som vist i figuren. Denne figuren vil være til stede under hele eksperimentet.</p>',
      '<img src="' + keyboard_path + '"></img>',
      '<p>Før du gjør det faktiske eksperimentet, vil du gjennomføre noen øvingstester. Disse vil gi deg tilbakemelding om nøyaktigheten din.',
      '<p>Husk å svare så nøyaktig og raskt som mulig.</p>'
    ];

var ColorInstrPoorPerformanceText = ['<p>Det vil være en annen runde med øvingstester med tilbakemelding.</p> <p>Husk å svare så nøyaktig og raskt som mulig.</p>'];

var ColorTestInstrText = ['<p>Nå skal du svare uten noen tilbakemelding. Prøv å svare så raskt og nøyaktig som mulig. </p>'];

var WordInstrText = [
   '<p>Velkommen til Stroop-ordeksperimentet.</p>',
   '<p>I denne oppgaven vil ord vises i midten av skjermen, som dette:</p>',
   '<p>Blå</p>',
   '<p>Du må indikere hvilket ord som er skrevet.',
   '</br>Trykk på tasten som tilsvarer den fargen, som vist i figuren. Denne figuren vil være til stede under hele eksperimentet.</p>',
   '<img src="' + keyboard_path + '"></img>',
   '<p>Før du gjør det faktiske eksperimentet, vil du gjennomføre noen øvingstester. Disse vil gi deg tilbakemelding om nøyaktigheten din.</p>',
   '<p>Husk å svare så nøyaktig og raskt som mulig.</p>'];
   
var WordInstrPoorPerformanceText = [
  '<p>Det vil være en annen runde med øvingstester med tilbakemelding.</p>',
  '<p>Husk å svare så nøyaktig og raskt som mulig.</p>'
];

var WordTestInstrText = [
  '<p>Nå skal du gjennomføre oppgaven.</br>',
  'Den vil være akkurat som øvingstesten, bortsett fra at du ikke vil få tilbakemelding. </p>'
];
    
var ColorWordInstrText = [
      '<p>Velkommen til Stroop-farge/ordeksperimentet.</p>',
      '<p>I denne oppgaven vil ord vises i midten av skjermen. Du må indikere FARGEN som ordet er skrevet i (og ignorere hva ordet sier). Trykk på tasten som tilsvarer den fargen, som vist i figuren. Denne figuren vil være til stede under hele eksperimentet.</p>',
      '<img src="' + keyboard_path + '"></img>',
      '<p>Før du gjør det faktiske eksperimentet, vil du gjennomføre noen øvingstester. Disse vil gi deg tilbakemelding om nøyaktigheten din.</p>',
      '<p>Husk å svare så nøyaktig og raskt som mulig.</p>'];

var ColorWordInstrPoorPerformanceText = [
  '<p>Det vil være en annen runde med øvingstester med tilbakemelding.</p>',
  '<p>Husk å svare så nøyaktig og raskt som mulig.</p>'
];

var ColorWordTestInstrText = [
  '<p>Nå skal du svare uten noen tilbakemelding. Prøv å svare så raskt og nøyaktig som mulig. </p>'
];

var ColorThankYouText = 'Takk for at du fullførte eksperimentet. Trykk på en tast for å avslutte.'

var WordThankYouText = 'Takk for at du fullførte eksperimentet. Trykk på en tast for å avslutte.'

var ColorWordThankYouText = 'Takk for at du fullførte eksperimentet. Trykk på en tast for å avslutte.'

/* If the response choice get modified here they also need to be modified below
*/
var ResponseChoices = ['v','b','n','m',27]

var FeedbackLength = 400; // This is in milliseconds

//var FixationLength = 500; // This is in milliseconds


/* ========================================================= 
	This is a function for positioning the instruction figure and stimuli on the screen
	If the instruction keyboard mapping figure is too low change the 'height' value below.
*/

function PutIntoTable(top='top', middle='mid', width=600, height=250, img_path=keyboard_path) {
   return '<table border="0" width="'+width+'"><tr height="'+height+'"><td>'+top+'</td></tr><tr height="'+height+'">'+
          '<td><div style="font-size:60px;">'+middle+'</div></td></tr><tr height="'+height+'">'+
          '<td valign="bottom"><img src="'+ keyboard_path +'"></td></tr></table>';
 }
/* ========================================================= 
	This is the stimuli list for both stroop color and word
   The Grønn is very bright. TO make it less bright change it to something like (0,200,0)
*/

var StroopWordList = [
   {
      "Word": "Rød",
      "letter": "v",
      "Color": "(255,0,0)"
    },
    {
      "Word": "Gul",
      "letter": "b",
      "Color": "(255,255,0)"
    },
    {
      "Word": "Grønn",
      "letter": "n",
      "Color": "(0,255,0)"
    },
    {
      "Word": "Blå",
      "letter": "m",
      "Color": "(0,0,255)"
    }
]

/* ========================================================= 
	This is the stimuli list for stroop color/word
*/
var StroopColorWordList = [
 {
   "Word": "Rød",
   "Congruency": "Con",
   "letter": "v",
   "Color": "(255,0,0)"
 },
 {
   "Word": "Rød",
   "Congruency": "Incon",
   "letter": "b",
   "Color": "(255,255,0)"
 },
 {
   "Word": "Rød",
   "Congruency": "Incon",
   "letter": "m",
   "Color": "(0,0,255)"
 },
 {
   "Word": "Rød",
   "Congruency": "Incon",
   "letter": "n",
   "Color": "(0,255,0)"
 },
 {
   "Word": "Gul",
   "Congruency": "Incon",
   "letter": "v",
   "Color": "(255,0,0)"
 },
 {
   "Word": "Gul",
   "Congruency": "Con",
   "letter": "b",
   "Color": "(255,255,0)"
 },
 {
   "Word": "Gul",
   "Congruency": "Incon",
   "letter": "m",
   "Color": "(0,0,255)"
 },
 {
   "Word": "Gul",
   "Congruency": "Incon",
   "letter": "n",
   "Color": "(0,255,0)"
 },
 {
   "Word": "Blå",
   "Congruency": "Incon",
   "letter": "v",
   "Color": "(255,0,0)"
 },
 {
   "Word": "Blå",
   "Congruency": "Incon",
   "letter": "b",
   "Color": "(255,255,0)"
 },
 {
   "Word": "Blå",
   "Congruency": "Con",
   "letter": "m",
   "Color": "(0,0,255)"
 },
 {
   "Word": "Blå",
   "Congruency": "Incon",
   "letter": "n",
   "Color": "(0,255,0)"
 },
 {
   "Word": "Grønn",
   "Congruency": "Incon",
   "letter": "v",
   "Color": "(255,0,0)"
 },
 {
   "Word": "Grønn",
   "Congruency": "Incon",
   "letter": "b",
   "Color": "(255,255,0)"
 },
 {
   "Word": "Grønn",
   "Congruency": "Incon",
   "letter": "m",
   "Color": "(0,0,255)"
 },
 {
   "Word": "Grønn",
   "Congruency": "Con",
   "letter": "n",
   "Color": "(0,255,0)"
 }
]