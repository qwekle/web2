const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.json());
const users = [
    {
        'phoneNumber': 89115068341,
        'waitingDocuments': [1, 2, 3],
        'signedDocuments': [1, 2, 3]
    }
];
const documents = [
    {
        'id': 1,
        'createUser': 89115068341,
        'img': null,
        'createDate': 'test',
        'termMonth': 3,
        'signStatus': false,
        'signerFirst': {
            'phoneNumber': 89999999999,
            'signStatus': false,
        },
        'signerSecond': {
            'phoneNumber': 87777777777,
            'signStatus': true,
        }
    },
    {
        'id': 2,
        'createUser': 89115068341,
        'img': null,
        'createDate': 'test',
        'termMonth': 3,
        'signStatus': false,
        'signerFirst': {
            'phoneNumber': 89999999999,
            'signStatus': true,
        },
        'signerSecond': {
            'phoneNumber': 87777777777,
            'signStatus': false,
        }
    },
    {
        'id': 3,
        'createUser': 89115068341,
        'img': null,
        'createDate': 'test',
        'termMonth': 3,
        'signStatus': false,
        'signerFirst': {
            'phoneNumber': 89999999999,
            'signStatus': true,
        },
        'signerSecond': {
            'phoneNumber': 87777777777,
            'signStatus': true,
        }
    },
    {
        'id': 4,
        'createUser': 89115068341,
        'img': null,
        'createDate': 'test',
        'termMonth': 3,
        'signStatus': true,
        'signerFirst': {
            'phoneNumber': 89999999999,
            'signStatus': true,
        },
        'signerSecond': {
            'phoneNumber': 87777777777,
            'signStatus': true,
        }
    },
    {
        'id': 40,
        'createUser': 89115068341,
        'img': null,
        'createDate': 'test',
        'termMonth': 3,
        'signStatus': false,
        'signerFirst': {
            'phoneNumber': 89999999999,
            'signStatus': false,
        },
        'signerSecond': {
            'phoneNumber': 87777777777,
            'signStatus': true,
        }
    },
]

app.get('/documents/waiting', (req, res) => {
    const phoneNumber = req.header('phoneNumber');
    const result = [];
    if (documents.length > 0) {
        documents.forEach(item => {
            if (item.createUser == phoneNumber && item.signerFirst.signStatus && item.signerSecond.signStatus && !item.signStatus) {
                result.push(item)
            } else if (item.signerFirst.phoneNumber == phoneNumber && !item.signerFirst.signStatus) {
                result.push(item)
            } else if (item.signerSecond.phoneNumber == phoneNumber && !item.signerSecond.signStatus) {
                result.push(item)
            }
        })
    }
    res.send(result);
})
app.get('/documents/signed', (req, res) => {
    const result = [];
    if (documents.length > 0) {
        documents.forEach(item => {
            if (item.signStatus) {
                result.push(item)
            }
        })
    }
    res.send(result);
})
app.get('/document', (req, res) => {
    let document;
    documents.forEach(doc => {
        if (doc.id == req.query.id) document = doc;
    })
    res.send(document);
})
app.post('/documents/create', (req, res) => {
    documents.push(JSON.parse(JSON.stringify(req.body)));
    res.send('');
})
app.post('/document/sign', (req, res) => {
    let data = JSON.parse(JSON.stringify(req.body));
    documents.forEach(doc => {
        if(doc.id == data.id){
            if(doc.createUser == data.phoneNumber){
                doc.signStatus = true;
            }else if(doc.signerFirst.phoneNumber == data.phoneNumber){
                doc.signerFirst.signStatus = true;
            }else if(doc.signerSecond.phoneNumber == data.phoneNumber){
                doc.signerSecond.signStatus = true;
            }
        }
    })
    res.send('');
})

app.post('/login', (req, res) => {
    res.send('');
})

app.listen(8888);