const icreaseAge = (u: UserType) => {
  u.age++;
};

type UserType = {
  name: string;
  age: number;
};

test("big test", () => {
  const user = {
    name: "Artem",
    age: 23,
  };

  icreaseAge(user);

  expect(user.age).toBe(24);
});

test("array test", () => {
  const users = [
    {
      name: "Artem",
      age: 23,
    },
    {
      name: "Artem",
      age: 23,
    },
  ];

  const admins = users;
  admins.push({ name: "Bandygan", age: 10 });

  expect(users[2]).toEqual({ name: "Bandygan", age: 10 });
});
