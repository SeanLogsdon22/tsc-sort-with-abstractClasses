import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection  } from './CharactersCollection'

const numbersCollection = new NumbersCollection([5, 10, -30, -77, 100])
numbersCollection.sort()
console.log(numbersCollection.data)

const charactersCollection = new CharactersCollection('HelloWorld')
charactersCollection.sort()
console.log(charactersCollection.data)