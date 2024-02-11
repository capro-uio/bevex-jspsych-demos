var FullScreenMode = false;

var keyboard_path = "./assets/images/StroopColorsKeyboard.png"

function debrief_standard(data, congruency=false){
  var total_trials = data.count();
  var NumberCorrect = data.filter({correct: true}).count()
  var accuracy = Math.round(NumberCorrect / total_trials * 100);

  if (!congruency){
    return(
      "<p>You responded correctly on <strong>"+accuracy+"%</strong> of the "+total_trials+" trials.</p> " +
      "<p>Press any key to continue the experiment. </p>"
    )
  }

  var congruent_rt = Math.round(jsPsych.data.get().filter({correct: true, Congruency: 'Con'}).select('rt').mean());
  var incongruent_rt = Math.round(jsPsych.data.get().filter({correct: true, Congruency: 'Incon'}).select('rt').mean());

  return(
    "<p>You responded correctly on <strong>"+accuracy+"%</strong> of the "+total_trials+" trials.</p> " +
    "<p>Your average response time for congruent trials was <strong>" + congruent_rt + "ms</strong>.</p>"+
    "<p>Your average response time for incongruent trials was <strong>" + incongruent_rt + "ms</strong>.</p>"+
    "<p>Press any key to continue the experiment.</p>"
  )
}

var ColorInstrText = [
      '<p class="instruction">Welcome to the Stroop Color experiment.</p>',
      '<p class="instruction">You will be identifying the color of rectangles shown on the screen. When a rectangle is shown on the screen you are to press the key that corresponds to that color, as shown in the figure. This figure will be present during the entire experiment.</p><img src="' + keyboard_path + '"></img>',
      '<p class="instruction">Before doing the actual experiment you will complete some practice trials. These will give you feedback about your accuracy. <p class="instruction">Remember to respond as accurately and quickly as possible.</p>'];

var ColorInstrPoorPerformanceText = ['<p class="instruction">There will be another run of practice trials with feedback.</p> <p class="instruction">Remember to respond as accurately and quickly as possible.</p>'];

var ColorTestInstrText = ['<p class="instruction">You will now respond without any feedback. Try to respond as quickly and accurately as possible. </p>'];

var WordInstrText = [
   '<p class="instruction">Welcome to the Stroop Word experiment.</p>',
   '<p class="instruction">In this task, words will appear in the center of the screen, like   this:</p><p class="instruction">Blå</p><p class="instruction">You need to indicate what word is written. </br>Press the key that corresponds to that color, as shown in the figure. This figure will be present during the entire experiment.</p><img src="' + keyboard_path + '"></img>',
   '<p class="instruction">Before doing the actual experiment you will complete some practice trials. These will give you feedback about your accuracy. <p class="instruction">Remember to respond as accurately and quickly as possible.</p>'];
   
var WordInstrPoorPerformanceText = ['<p class="instruction">There will be another run of practice trials with feedback.</p> <p class="instruction">Remember to respond as accurately and quickly as possible.</p>'];

var WordTestInstrText = ['<p class="instruction">Now you will do the task.</br>It will be exactly like the practice except you will not get feedback. </p>'];
    
var ColorWordInstrText = [
      '<p class="instruction">Welcome to the Stroop Color/Word experiment.</p>',
      '<p class="instruction">In this task, words will appear in the center of the screen. You need to indicate the COLOR that the word is written in (and ignore what the word says). Press the key that corresponds to that color, as shown in the figure. This figure will be present during the entire experiment.</p><img src="' + keyboard_path + '"></img>',
      '<p class="instruction">Before doing the actual experiment you will complete some practice trials. These will give you feedback about your accuracy. <p class="instruction">Remember to respond as accurately and quickly as possible.</p>'];

var ColorWordInstrPoorPerformanceText = ['<p class="instruction">There will be another run of practice trials with feedback.</p> <p class="instruction">Remember to respond as accurately and quickly as possible.</p>'];

var ColorWordTestInstrText = ['<p class="instruction">You will now respond without any feedback. Try to respond as quickly and accurately as possible. </p>'];

var ColorThankYouText = 'Thank you. Press any key to end the experiment.'

var WordThankYouText = 'Thank you. Press any key to end the experiment.'

var ColorWordThankYouText = 'Thank you. Press any key to end the experiment.'

/* If the response choice get modified here they also need to be modified below
*/
var ResponseChoices = ['v','b','n','m',27]

var FeedbackLength = 400; // This is in milliseconds

//var FixationLength = 500; // This is in milliseconds

var ColorPracticeRepeats = 4
var WordPracticeRepeats = 4
var ColorWordPracticeRepeats = 2

// Since there are 4 possible trials, the number of trials will be 4 times the number of repeats
var ColorTestRepeats = 8
// Since there are 4 possible trials, the number of trials will be 4 times the number of repeats
var WordTestRepeats = 8
// Since there are 16 possible trials, the number of trials will be 4 times the number of repeats
var ColorWordTestRepeats = 4



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