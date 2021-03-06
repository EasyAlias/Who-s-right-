let dispute = [
    {
        id: 101,
        timeDispute: '1',
        nameUser1: 'Ира',
        nameUser2: 'Вася',
        questionDispure: 'Кто первый побывал на луне?',
        answerUser1: 'СССР',
        answerUser2: 'США',
        voteForUser1: 0,
        voteForUser2: 0,
        timestamp: 1610520530015
    },
    {
        id: 102,
        timeDispute: '1',
        nameUser1: 'Даша',
        nameUser2: 'Петя',
        questionDispure: 'Какой автомобиль быстрее?',
        answerUser1: 'Ford',
        answerUser2: 'Ferarri',
        voteForUser1: 0,
        voteForUser2: 0,
        timestamp: 1610520530015
    },
    {
        id: 103,
        timeDispute: '0',
        nameUser1: 'Георгий',
        nameUser2: 'Александр',
        questionDispure: 'До какой минимальной отметки в этом году опуститься температура в г. Ярославль?',
        answerUser1: '-25',
        answerUser2: '-30',
        voteForUser1: 16,
        voteForUser2: 23,
        timestamp: 1610520530015
    }
];

const express = require('express');
const app = express();
let cors = require('cors');
let cronJob = require('cron').CronJob;
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
let id = 1;


// функция для отчета времени спора
getArchiveDispute = () => {
    new cronJob(`* 1 * * * *`, function(){
        dispute.map((el, idx) => {
            const now = Date.now();
            let numTimeDispute = (+(el.timeDispute)* 24 * 60 * 60  * 1000) + el.timestamp
                if (numTimeDispute < now)
                dispute[idx] = {...el, timeDispute: "0"};
            })
    }, null, true, 'America/Los_Angeles')
}

app.all('/dispute/', function(req,res,next) {
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    getArchiveDispute();    
    next();
})
app.all('/dispute/:id', function(req,res,next) {
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    next();
})
app.get('/dispute', function(req, res) {
    res.json(dispute);    
});
app.get('/dispute/:id', function(req, res) {
    const idDispute = parseInt(req.params.id);
    const disputeIndex = dispute.findIndex(number => parseInt(number.id) === idDispute);
    if (disputeIndex !== -1) {
        res.json(dispute[disputeIndex]);
    }
    res.status(404).json();
});

app.post('/dispute',function(req, res) {
    const {timeDispute, nameUser1, nameUser2, questionDispure, answerUser1, answerUser2, voteForUser1, voteForUser2, timestamp} = req.body;
    const disp = {
        id: id,
        timeDispute,
        nameUser1,
        nameUser2,
        questionDispure,
        answerUser1,
        answerUser2,
        voteForUser1,
        voteForUser2,
        timestamp    
    }

    id += 1;
    
    dispute.push(disp);
    res.json(disp);
});
app.put('/dispute/:id', function(req, res) {
    const idNumber = parseInt(req.params.id);
    const disputeIndex = dispute.findIndex(number => parseInt(number.id) === idNumber);

    if(disputeIndex !== -1) {
        const oldNumber = dispute[disputeIndex];
        let voteForUser1Number = dispute[disputeIndex].voteForUser1 + req.body.voteForUser1;
        let voteForUser2Number = dispute[disputeIndex].voteForUser2 + req.body.voteForUser2;
        dispute[disputeIndex] = {...oldNumber, voteForUser1: voteForUser1Number, voteForUser2: voteForUser2Number };
        res.json(dispute[disputeIndex]);
        } else {
            res.status(404).json();
        }
})


// app.delete('/dispute/:id', function(req, res) {
//     const idDispute = parseInt(req.params.id);
//     const disputeIndex = dispute.findIndex(number => parseInt(number.id) === idPhonebook);
//     if(disputeIndex !== -1){
//         dispute = dispute.filter(el => el.id !== idDispute);
//         res.json(dispute);
//     } else {
//         res.status(404).json();
//     }
// })


app.listen(5000, () => {
    console.log(`App are listening at port 5000`)
});