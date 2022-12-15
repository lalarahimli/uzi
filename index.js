const express =require('express')

const app = express();
const PORT =5000;
const card =[{
    id:'1',
    number:'4461',
},{
    id:'2',
    number:'4462',
},{
    id:'3',
    number:'4420',
},{
    id:'4',
    number:'4421',
},{
    id:'5',
    number:'4422',
},{
    id:'6',
    number:'4430',
},{
    id:'7',
    number:'4431',
},{
    id:'8',
    number:'4432',
},{
    id:'9',
    number:'4433',
},{
    id:'5',
    number:'4434',
}
];
app.get('/card/:id',function(req,res){
    // res.send(JSON.stringify(card.find((card)=>card.id==req.params.id)));
    const user = card.find((card) =>card.id==req.params.id);
    if (!user) {
      res.status(404).send(user);
    }
    res.status(200).json(user);
  
});
app.listen(PORT,(err)=>{
    if(!err){
        console.log('start')
    }
})