db = connect('localhost:27017/celebs')

function getCelebsDetails() {
  const allCelebs = db.celebs.find({})
  return allCelebs.map(
    (celeb) =>
      `${celeb.name} is from ${celeb.birthplace} and is ${celeb.age} years old.`
  )
}

function getCelebsOlderThan(age) {
  return db.celebs.find({ age: { $gt: age } })
}

function getActors() {
  return db.celebs.find({ job: { $eq: 'Actor' } })
}

function getNames() {
  const allCelebs = db.celebs.find({})
  return allCelebs.map((celeb) => celeb.name)
}

function getNumberOfSingers() {
  return db.celebs.count({ job: 'Singer' })
}
