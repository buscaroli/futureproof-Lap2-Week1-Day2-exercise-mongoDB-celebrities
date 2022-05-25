db = connect('localhost:27017/celebs')

// drop the db if one exists
db.celebs.drop()

db.celebs.insertMany([
  {
    name: 'Zucchero',
    age: 66,
    birthplace: 'Roncocesi',
    sex: '',
    job: 'Singer',
  },
  { name: 'Madonna', age: 63, birthplace: 'Bay City', sex: 'F', job: 'Singer' },
  {
    name: 'Johnny Depp',
    age: 59,
    birthplace: 'Owensboro',
    sex: 'M',

    movies: [
      'Pirates of the Caribbeans',
      'Alice in WInderland',
      'Edward Scissorhands',
    ],
    job: 'Actor',
  },
  {
    name: 'Arnold Schwarzenegger',
    age: 75,
    birthplace: 'Thal',
    sex: 'M',
    job: 'Actor',
    movies: ['Conan the Barbarian', 'Predator', 'Twins', 'Terminator'],
  },
  {
    name: 'Emma Watson',
    age: 32,
    birthplace: 'Paris',
    sex: 'F',
    job: 'Actor',
    movies: ['Harry Potter', 'Noah', 'Little Women'],
  },
  {
    name: 'Roberto Benigni',
    age: 69,
    birthplace: 'Castiglion Fiorentino',
    sex: 'M',
    job: 'Actor',
    prizes: ['Oscar 1999', 'Bafta 1999', 'David di Donatello', "Globo d'Oro"],
    partner: 'Nicoletta Braschi',
  },
])
