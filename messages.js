const randGenerator = () =>{
    return Math.floor(Math.random() * 7);};

const str1 = ['Hello', 'Hi', 'Hey', 'Howdy', 'Greetings', 'Salutations', 'How are you?', 'What\'s up?'];

const str2 = ['buddy', 'mate', 'useless', 'smart guy', 'dude', 'friend', 'pal', 'bro'];

const str3 = ['why so serious', 'really do you think that?', 'How\'s it going?', 'How\'s life?', 'How\'s your day?', 'How\'s your day going?', 'How\'s your day been?', 'How\'s your day been going?'];

console.log(str1[randGenerator()] + ' ' + str2[randGenerator()] + ', ' + str3[randGenerator()]);