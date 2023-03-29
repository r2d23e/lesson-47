let courses = [
    {
        title: 'SMM',
        howLong: 3
    },
    {
        title: 'Dev',

        howLong: 6
    },
    {
        title: 'Graph',
        howLong: 4
    },
]




let average_age = 0





let students = [

    {
        sex: 'm',
        age: 14,
        payment: 1220000,
        course: {
            title: 'SMM',
        }
    },

    {
        sex: 'm',
        age: 24,
        payment: 1883000,
        course: {
            title: 'Graph'
        }
    },
    {

        sex: 'w',

        age: 16,

        payment: 2190000,

        course: {

            title: 'Dev'

        }

    },

    {

        sex: 'm',

        age: 19,

        payment: 718000,

        course: {

            title: 'Graph'

        }

    },

    {

        sex: 'w',

        age: 15,

        payment: 2195000,

        course: {

            title: 'Dev'

        }

    },

    {

        sex: 'm',

        age: 24,

        payment: 460000,

        course: {

            title: 'SMM'

        }

    },

    {

        sex: 'w',

        age: 14,

        payment: 560000,

        course: {

            title: 'SMM'

        }

    },

    {

        sex: 'w',

        age: 22,

        payment: 160000,

        course: {

            title: 'Dev'

        }

    },

    {

        sex: 'm',

        age: 26,

        payment: 883000,

        course: {
            title: 'Dev'

        }

    },

    {

        sex: 'w',

        age: 26,

        payment: 750000,

        course: {

            title: 'Dev'

        }

    },

    {

        sex: 'm',

        age: 23,

        payment: 212000,

        course: {

            title: 'Graph',

        }

    },

    {

        sex: 'w',

        age: 24,

        payment: 883000,

        course: {

            title: 'Graph'

        }

    },

    {

        sex: 'w',

        age: 27,

        payment: 190000,

        course: {

            title: 'Dev'

        }

    },

    {

        sex: 'w',

        age: 19,

        payment: 210000,

        course: {

            title: 'Graph'

        }

    },

    {

        sex: 'w',

        age: 21,

        payment: 770000,

        course: {

            title: 'Dev'

        }

    },

    {

        sex: 'm',

        age: 18,

        payment: 1200000,

        course: {

            title: 'SMM'

        }

    },

    {

        sex: 'w',

        age: 51,

        payment: 880000,

        course: {

            title: 'SMM'

        }

    },

    {

        sex: 'm',

        age: 51,

        payment: 2430000,

        course: {

            title: 'Dev'

        }

    },

    {

        sex: 'w',

        age: 33,

        payment: 1277000,

        course: {

            title: 'Graph'

        }

    },

    {
        sex: 'w',

        age: 21,

        payment: 2750000,

        course: {

            title: 'Dev'

        }

    },

]

// В этом примере перед вами учебный центр, в котором учиться несколько студентов. Каждый из них учиться на каком-то курсе и платит за обучение. У студентов мы видим пол, возраст, оплату, а также курс, которые они выбрали.*

// 1. Добавить студентам ключ howLong внутри ключа course, рядом с title. HowLong - цифра, означающая сколько месяцев длиться курс*

// 2. Сохранить количество девочек и мальчиков внутри переменных m и w*

// 3. Сохранить заработок учебного центра в earning.total*

// 4. Узнать кто больше всех платит за обучение в earning.max*

// 5. Узнать кто меньше всех платит за обучение в earning.min*

// 6. Посчитать сколько студентов учиться на курсах внутри dev, smm и graph*

// 7. Посчитать средний возраст студентов в average_age*

//7
let ages = 0
for (let item of students) {
    ages += item.age

}

average_age = students.length
let cr_znach = Math.round(ages / average_age)
console.log(cr_znach);
//7

//6 and3
let smm = 0
let dev = 0
let graph = 0
let m = 0
let w = 0
m = students.filter(item=>item.sex=='m')
w = students.filter(item=>item.sex=='w')

smm = students.filter(item => item.course.title == courses[0].title).length
dev = students.filter(item => item.course.title == courses[1].title).length
graph = students.filter(item => item.course.title == courses[2].title).length

console.log(m);
console.log(w);
console.log(smm);
console.log(dev);
console.log(graph);
//6

//5 4 3
let earnings = {
    total: 0,
    max: 0,
    min: 0
}
let sum = 0
let payment = []
for (let item of students) {
    earnings.total += item.payment
    payment.push(item.payment)
    payment.sort((a, b) => a - b)
    earnings.max = payment[payment.length - 1]
    earnings.min = payment[0]
}
console.log(payment);
console.log(earnings);





//1
for(let item of students){
    if(item.course.title =='SMM'){
        item.course=courses[0]
    }
    if(item.course.title =='Dev'){
        item.course=courses[1]
    }
    if(item.course.title =='Graph'){
        item.course=courses[2]
    }
}
students.sort((a,b)=>a.payment-b.payment)
console.log(students);