db = connect('localhost:27017/celebs')

function getCelebsDetails() {
  const allCelebs = db.celebs.find({})
  return allCelebs.map(
    (celeb) =>
      `${celeb.name} is from ${celeb.birthplace} and is ${celeb.age} years old.`
  )
}
