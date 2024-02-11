const target_present = [true, false] //om målet er til stede i hver prøve
const set_size = [1, 5, 15, 30] //antall distraktorer i hver prøve

const repeat_trials = 10; //hvor mange ganger hver prøvetype skal gjentas

const block_number = 10; //hvor mange blokker som skal inkluderes i eksperimentet

const conjunction_target = ['assets/images/greenT.png', 'assets/images/greenT.png']
const shape_target = ['assets/images/greenS.png', 'assets/images/redS.png']
const colour_target = ['assets/images/blueL.png', 'assets/images/blueT.png']
const foil_images = ['assets/images/greenL.png', 'assets/images/redT.png']
const fixation = 'assets/images/blackDot.png' //fiksering
const experiment_type = 'farge' //kan også ha verdien 'form' og 'farge'

//taster å trykke på
const the_present_key = 'j'
const the_absent_key = 'f'

//stimulusstørrelse
const stimw = 25
const stimh = 25

const circle_diam = 0 //hvis satt til 0, vil sirkeldiameteren bli beregnet basert på stimulusbredde og -høyde

const prompt_msg = "Fortsett å stirre på den svarte prikken i midten av skjermen. <br>" +
                   "Bruk j- og f-tastene for å indikere om målet er til stede eller ikke. <br>" +
                   "<strong>Hvis målet er til stede, trykk j. Hvis ikke, trykk f.</strong><br>"+
                   "Det kan være én eller flere målbilder.<br>"+
                   "Nedenfor ser du et eksempel på målbildet/demene."

const prac_msg = "Det vil være $PRAC_LEN øvingstester før eksperimentet begynner. Trykk på en tast for å starte."

const welcome_msg = "<strong>Velkommen til Visual Search-eksperimentet.</strong><br>"+
                    "Det vil være $BLOCK_NUM blokker i dette eksperimentet. Det vil være $BLOCK_LEN prøver i hver blokk.<br>"+
                    "Du vil ha muligheten til å ta en pause mellom blokkene. Trykk på en tast for å starte eksperimentet."

const trial_msg = "Du har fullført $T av $DESIGN.LENGTH prøver. Gjør deg klar for neste prøve."

const block_msg = 'Du har fullført $TRIALS % av prøvene. Du er på blokk $B av 10. Bra jobbet! Ta en pause hvis du trenger det. Trykk på en tast for å fortsette eksperimentet.'
