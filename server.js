let dispute = [];

const express = require('express');
const app = express();
let cors = require('cors');
let cronJob = require('cron').CronJob;
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
let id = 1;

//функция для отчета времени спора
getArchiveDispute = () => {
    dispute.map((el, idx) => {
        let numTimeDispute = +(el.timeDispute)
        new cronJob(`* 1 * * * *`, function(){
            dispute[idx] = {...el, timeDispute: "0"};
        }, null, true, 'America/Los_Angeles')
    })
}



app.all('/dispute/', function(req,res,next) {
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
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
});
app.post('/dispute',function(req, res) {
    const {timeDispute, nameUser1, nameUser2, questionDispure, answerUser1, answerUser2, voteForUser1, voteForUser2} = req.body;
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
    }

    id += 1;
    
    dispute.push(disp);
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
    getArchiveDispute();
    console.log(`App are listening at port 5000`)
});