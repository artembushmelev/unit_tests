import { ManType } from "./07_01";





let props: ManType;

beforeEach(() => {
    props = {
            name: "Artem",
            age: 23,
            lessons: [{title: "1"}, {title: "2"}],
            address: {
                street: {
                    title: "chaikinoy"
                }
            }
    }
})

test('list of streets titles of government buildings', ()=> {
    let props = {
        name: "Artem",
        age: 23,
        lessons: [{title: "1"}, {title: "2"}, {title: "3"}],
        address: {
            street: {
                title: "chaikinoy"
            }
        }
    }


    //const age = man.age;
    //const lessons = man.lessons;

    const {age, lessons,} = props;
    const {title} = props.address.street;

    expect(age).toBe(23);
    expect(lessons.length).toBe(3);
    expect(title).toBe("chaikinoy");
})

// eslint-disable-next-line jest/valid-title
test('' , () => {
    const [lessons1, ...restLessons] = props.lessons;

    expect(lessons1.title).toBe('1')
    expect(restLessons.length).toBe(1)
    expect(restLessons[0].title).toBe("2")
    // expect(lessons2.title).toBe('2')
})
