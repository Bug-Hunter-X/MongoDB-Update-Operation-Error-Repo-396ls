```javascript
//Incorrect usage of $inc operator
db.collection('counters').updateOne( { _id: 'myCounter' }, { $inc: { sequence: 1 } } );
//The above code will increment the sequence value only if the document exists. If the document does not exists, it will not create the document. 
//To create the document if it does not exist and increment the sequence value, we use the upsert option
db.collection('counters').updateOne( { _id: 'myCounter' }, { $inc: { sequence: 1 } }, { upsert: true } );
```