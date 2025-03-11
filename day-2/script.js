// Level 1
let challenge = '30 Days Of JavaScript';
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(0, 2));
console.log(challenge.substring(3));
console.log(challenge.includes('Script'));
console.log(challenge.split(''));
console.log(challenge.split(' '));

let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(', '));
console.log(challenge.replace('JavaScript', 'Python'));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(challenge.indexOf('J')));
console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));

let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));
console.log(sentence.lastIndexOf('because'));
console.log(sentence.search('because'));
console.log(' 30 Days Of JavaScript '.trim());
console.log(challenge.startsWith('30'));
console.log(challenge.endsWith('JavaScript'));
console.log(challenge.match(/a/g));
console.log('30 Days of '.concat('JavaScript'));
console.log(challenge.repeat(2));

// Level 2
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"");
console.log(typeof '10' === typeof 10);
console.log(Number('10') === 10);
console.log(parseFloat('9.8') === 10 ? 10 : Math.ceil(9.8));
console.log('python'.includes('on') && 'jargon'.includes('on'));
console.log('I hope this course is not full of jargon.'.includes('jargon'));
console.log(Math.floor(Math.random() * 101));
console.log(Math.floor(Math.random() * 51) + 50);
console.log(Math.floor(Math.random() * 256));
console.log('JavaScript'.charAt(Math.floor(Math.random() * 'JavaScript'.length)));
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');
console.log(sentence.replace('because because because', ''));

// Level 3
let loveSentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(loveSentence.match(/love/gi).length);
console.log(sentence.match(/because/gi).length);

const messyText = "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
let cleanText = messyText.replace(/[%$@&#;!?#]/g, '');
console.log(cleanText);

const incomeText = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let incomes = incomeText.match(/\d+/g).map(Number);
let totalIncome = (incomes[0] * 12) + incomes[1] + (incomes[2] * 12);
console.log(totalIncome);
