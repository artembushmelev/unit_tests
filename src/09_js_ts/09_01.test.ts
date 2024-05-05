const icreaseAge = (u: UserType) => {
  u.age++;
};

type UserType = {
  name: string;
  age: number;
  address: { title: string };
};

test("big test", () => {
  const user = {
    name: "Artem",
    age: 23,
    address: {
      title: "Kazan",
    },
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

test("value type test", () => {
  const usersCount = 100;
  let adminsCount = usersCount;
  adminsCount = adminsCount + 1;
  adminsCount++;
});

test("reference type test", () => {
  const user = {
    name: "Artem",
    age: 23,
    address: {
      title: "Kazan",
    },
  };

  let addr = user.address;
  let user2 = {
    name: "Albina",
    age: 30,
    address: user.address,
  };

  user.address.title = "Votkins";

  expect(user.address.title).toBe("Votkins");
});

test("reference type array test", () => {
  const address = {
    title: "Kazan",
  };
  const user: UserType = {
    name: "Artem",
    age: 23,
    address: address,
  };
  const user2: UserType = {
    name: "Albina",
    age: 30,
    address: address,
  };

  const users = [user, user2, { name: "Misha", age: 18, address: address }];
  const admins = [user, user2];
  admins[0].name = "Sasha";

  address.title = "Votkins";

  expect(users[0].name).toBe("Sasha");
  expect(user.name).toBe("Sasha");
});
