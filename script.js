const clone = (o) => JSON.parse(JSON.stringify(o))

const addUser = function(id) {
    return {
        id,
        questions: []
    }
}

const addQuestion = function(user, question) {
    const userObj = clone(user)
    userObj.questions.push(question)
    return userObj
}

const addScore = function(questions) {
    return questions.reduce((acc, cur) => {
        return acc + cur.weight
    }, 0)
}

const newUser = addUser(1)
const newUser1 = addQuestion(newUser, {
    question: 'Who are you',
    weight: 4
})
const newUser2 = addQuestion(newUser1, {
    question: 'What are you',
    weight: 3
})
console.log(addScore(newUser2.questions))

function detLowScore(arr) {
    let min = Math.min(...arr)
    return arr.reduce((acc, elem) => {
        if (elem !== min) {
            return [...acc, elem]
        }
        if (elem === min) {
            min = null
            return acc
        }
    }, [])
}

console.log(detLowScore([1, 2, 3, 4, 5, 6, 77]))