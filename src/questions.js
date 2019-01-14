const loginQuestions = [
    {
        type: 'input',
        name: 'email',
        message: 'Enter Your Email'
    },
    {
        type: 'password',
        name: 'password',
        message: 'Enter Your Password'
    }
];
const registerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter Your Name'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter Your Email'
    },
    {
        type: 'password',
        name: 'password',
        message: 'Enter Your Password'
    },
    {
        type: 'list',
        choices: ["male", "famel"],
        name: 'gender',
        message: 'Select Gender'
    }
];
const tweetQuestions = [
    {
        type: 'input',
        name: 'content',
        message: 'Write Tweet'
    }
];
const commentQuestions = [
    {
        type: 'input',
        name: 'comment',
        message: 'Write Comment'
    }
];
let tweetListQuestions = (choices) => {
   return [
        {
            type: 'list',
            choices: choices,
            name: 'id',
            message: 'List Tweet'
        }
    ]
}

let tweetControlQuestions = (tweet)=>[
    {
        type: 'list',
        choices: ["New Comment","Show Comments","Share"],
        name: 'control',
        message: tweet
    }
]


module.exports = { loginQuestions, registerQuestions, tweetQuestions,tweetListQuestions ,tweetControlQuestions , commentQuestions}