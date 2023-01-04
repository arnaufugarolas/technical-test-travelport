import getData from '../getData'

it('should return an array of users', async () => {
  const users = await getData(10)
  expect(users.length).toBe(10)
})
