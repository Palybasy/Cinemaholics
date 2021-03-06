const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
 
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  const db = client.db('Cinemaholics');
  const collection = db.collection('films');
  
  collection.insertMany([
    {name : "Дыши во мгле",
    year : 2018,
    country : "Франция, Канада",
    director : "Дэниэл Роби",
    genre : "фантастика, триллер, приключения",
    descr : "После внезапного землетрясения туман, убивающий все живое, окутывает Париж. Немногие из оставшихся в живых забираются за чистым воздухом на крыши зданий: без связи, воды и еды они все еще надеются на помощь. Анна и Мэттью пойдут на все, чтобы спасти свою дочь, но для этого им придется спуститься в самую гущу опасной мглы."
    },
    {name : "Мстители:война бесконечности",
    year : 2018,
    country : "США",
    director : "Энтони Руссо, Джо Руссо",
    genre : "фантастика, фэнтези, боевик, приключения",
    descr : "Пока Мстители и их союзники продолжают защищать мир от различных опасностей, с которыми не смог бы справиться один супергерой, новая угроза возникает из космоса: Танос. Межгалактический тиран преследует цель собрать все шесть Камней Бесконечности — артефакты невероятной силы, с помощью которых можно менять реальность по своему желанию. Всё, с чем Мстители сталкивались ранее, вело к этому моменту — судьба Земли никогда ещё не была столь неопределённой."
    },
    {name : "Собибор",
    year : 2018,
    country : "Россия",
    director : "Константин Хабенский",
    genre : "военный, драма",
    descr : "История сопротивления человеческого духа бездушной машине уничтожения. В октябре 1943 года заключённые лагеря Собибор во главе с лейтенантом Красной Армии Александром Печерским поднимают восстание — единственное успешное восстание в нацистском лагере смерти."
    },
    {name : "Такси 5",
    year : 2018,
    country : "Франция",
    director : "Франк Гастамбид",
    genre : "боевик, комедия, криминал, приключения",
    descr : "Экс-комиссар Жибер, ставший самым непутевым в истории города мэром Марселя, поручает переведенному из столицы новобранцу Сильвану Маро разобраться с неуловимой «бандой итальянцев» на Ferrari. Чтобы остановить их, Маро, суперкопу и суперводителю, приходится объединиться с племянником Даниэля. Парню досталось знаменитое белое такси дяди, но не его талант."
    },
    {name : "Танки",
    year : 2018,
    country : "США",
    director : "Ким Дружинин",
    genre : "приключения, история, военный",
    descr : "На пороге войны с фашистской Германией инженер Михаил Кошкин разрабатывает прототип нового инновационного танка Т-34. Чтобы доказать уникальность боевой машины, Кошкин и его команда отправляются в Москву на танках своим ходом. Но вскоре пробег превращается в непредсказуемую гонку, где бездорожье лишь меньшее из зол… Пройдя череду опасных приключений и благодаря безупречным техническим и боевым качествам новых танков, героям удается одержать верх над преследователями и доказать превосходство Т-34."
    },
    {name : "Титан",
    year : 2018,
    country : "Великобритания, Испания, США",
    director : "Леннарт Рафф",
    genre : "фантастика, триллер,",
    descr : "Американский военный Рик принимает участие в грандиозной космической программе. Лучшие умы планеты пытаются создать сверхлюдей, которые после гибели Земли обеспечат продолжение существования человечества на планете Титан. Однако эксперимент по скрещиванию генов Homo sapiens с инопланетным существом приводит к совершенно непредсказуемым последствиям."
    },
    {name : "Тренер",
    year : 2018,
    country : "Россия",
    director : "Данила Козловский",
    genre : "драма, спорт",
    descr : "Футболист национальной сборной Юрий Столешников в ответственный момент не забивает пенальти. После досадной ошибки Столешников покидает сборную, завершает карьеру и становится тренером маленькой провинциальной команды. Именно с этим клубом Столешникову предстоит совершить чудо и вновь поверить в себя."
    }
   
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(7, result.result.n);
    assert.equal(7, result.ops.length);
    console.log("Inserted 7 documents into the collection");
    });
    client.close();
  
});

