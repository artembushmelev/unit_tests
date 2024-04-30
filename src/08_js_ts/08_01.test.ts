import { users } from "./08_01"

beforeEach(() => {

})

test('should select corresponding user from obj',() => {
    expect(users['101'].name).toBe('Dimych')
})