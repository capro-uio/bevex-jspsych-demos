const img_category = 'faces'
const inverted = false

const place_h = img_category.slice(0, -1) // plassholder for entallsformen av kategorinavnet

const img_path = 'assets/images/ready/'

const randomize_view = false 
const randomize_ID = false

const cars_key_list =   [ [ [1,1,2] ], [ [3,3,2], [1,2,1], [3,1,2], [2,2,3], [2,1,3], [1,2,3] ], [2,1,1,3,2,1,3,1,1,3,3,3,2,2,3,2,1,1,2,1,1,1,3,2,2,3,2,2,1,1], [2,3,3,1,2,2,1,1,2,1,1,3,2,3,3,2,2,2,2,2,3,3,1,3] ]
const faces_key_list = [ [ [1,2,2] ], [ [2,3,3], [2,3,3], [3,3,1], [2,3,1], [3,1,3], [1,3,1] ], [1,2,1,3,3,2,1,3,2,3,2,3,2,1,2,2,2,2,1,3,1,2,2,1,3,1,2,1,1,3], [2,3,1,1,3,1,2,1,2,2,2,2,1,2,1,2,3,1,3,1,1,1,1,3] ]

const image_height = 200
const review_height = image_height*2.5
const learn_duration = 3000
const review_duration = 20000

const prac_prep_msg = '<p><strong>TRENING</strong></p><p>Memoriser ${IMG_CAT} i de neste tre bildene.</p><p>En test vil følge.</p><p>Trykk på en tast på tastaturet for å begynne.</p>'

const prac_prompt_msg = ['<p>Memoriser ${IMG_CAT}ene.</p>','<p>Hvilket ${IMG_CAT} så du akkurat? Det er bare ett riktig svar. Trykk 1, 2 eller 3.</p>']

const part01_prep_msg = "<p>Dette var treningstestene.</p>" +
                        "<p>I <em>denne</em> testen vil du lære å gjenkjenne seks ${IMG_CAT}er.</p>" +
                        "<p>Flott! La oss fortsette og gjøre den faktiske testen.</p>"
                        "<p>For å begynne å memorisere den første ${IMG_CAT}en, trykk på en tast på tastaturet</p>"

const part01_btw_msg = "<p>Memorize the following ${IMG_CAT}.</p><p>Press any key to continue.</p>"

const part01_prompt_msg = ['<p>Memoriser ${IMG_CAT}ene</p>','<p>Hvilket ${IMG_CAT} så du akkurat?</p>']

const review_prep_msg = 'Neste vil du gjennomgå de samme seks ${IMG_CAT}ene i ${REV_DUR} sekunder. Trykk på en tast på tastaturet.'

const review_prompt_msg = '<p>Se igjennom ${IMG_CAT}ene (${REV_DUR} sekunder)</p>'

const part02_prep_msg = '<p>Nå vil hukommelsen din for disse ${IMG_CAT}ene bli testet. I de gjenværende testene kan det riktige svaret være en av de seks ${IMG_CAT}ene.</p>' + 
                        '<p>De feilaktige ${IMG_CAT}ene er noen ganger veldig like de målrettede ${IMG_CAT}ene, så sørg for å se på hver ${IMG_CAT} før du svarer.</p>' +
                        '<p>Trykk på en tast for å begynne.</p>'

const part02_prompt_msg = '<p>Hvilket ${IMG_CAT} er en av de seks målrettede ${IMG_CAT}ene?</p>'


const part03_prompt_msg = '<p>Hvilket ${IMG_CAT} er en av de seks målrettede ${IMG_CAT}ene?</p>'
