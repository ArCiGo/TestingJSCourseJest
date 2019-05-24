import {getFlyingSuperHeros} from '../super-heroes'

test('returns super heroes that can fly', () => {
  const flyingHeroes = getFlyingSuperHeros()

  expect(flyingHeroes).toMatchSnapshot()
  /*expect(flyingHeroes).toEqual([
    {name: 'Dynaguy', powers: ['disintegration ray', 'fly']},
    {name: 'Apogee', powers: ['gravity control', 'fly']},
  ])*/
})
