let dispute = [{
    id: 1,
    timeDispute: 32,
    nameUser1: "Vasya",
    nameUser2: "Petya",
    questionDispure:"Egg or Chiken",
    answerUser1: "Egg",
    answerUser2: "Chiken",
}];

// const { json } = require('express');
const express = require('express');
const app = express();
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

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
    // let newDispute = JSON.parse(req.body)
    // const disp = {
    //     id: newDispute.id,
    //     timeDispute: newDispute.timeDispute,
    //     nameUser1: newDispute.nameUser1,
    //     nameUser2: newDispute.nameUser2,
    //     questionDispure: newDispute.questionDispure,
    //     answerUser1: newDispute.answerUser1,
    //     answerUser2: newDispute.answerUser2,
    // }
    dispute.push(req.body);
    res.json(req.body);
});
app.put('/dispute/:id', function(req, res) {
    const idNumber = parseInt(req.body.id);
    const disputeIndex = dispute.findIndex(number => parseInt(number.id) === idNumber);

    if(disputeIndex !== -1) {
        const oldNumber = dispute[disputeIndex];
        disputes[disputeIndex] = {...oldNumber, ...req.body};
        res.json(dispute[disputeIndex]);
        } else {
            res.status(404).json();
        }
})
app.delete('/dispute/:id', function(req, res) {
    const idDispute = parseInt(req.params.id);
    const disputeIndex = dispute.findIndex(number => parseInt(number.id) === idPhonebook);
    if(disputeIndex !== -1){
        dispute = dispute.filter(el => el.id !== idDispute);
        res.json(dispute);
    } else {
        res.status(404).json();
    }
})

app.listen(5000, () => 
    console.log(`App are listening at port 5000`)
);