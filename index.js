require('dotenv').config()
const express = require('express')
const cors = require("cors")


const mockOrder = {
    isSuccess: true,
    hasClaim: true,
    isEligible: true,
    order: {
        id: 12332,
        totalPaid: 98.99,
        payNow: true,
        initialClaimDate: '2021-06-10T15:10:02.81',
        expiryClaimDate: '2021-06-10T15:10:02.81',
        nonRefundableProducts: [
            {
                id: 1
            }
        ]
    },
    amountClaimable: 199,
    notEligibleReasons: [
        {
            id: 1,
            reason: 'Offer has not exceeded 10 months',
            meta: {
                startDate: '129302',
                endDate: '129302'
            },
            price: 342423
        }
    ],
    hasNonRefundableProducts: true,
    serviceAgreementVersion: '88c9653b-1a42-406c-873a-01e016a329fb'
}

const app = express();

app.use(cors)

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    return res.send('ok')
});

app.get('/:orderid', (req, res) => {
    return res.send(JSON.stringify(mockOrder))
});

app.listen(process.env.PORT, () => {
    console.log(`app listening on ${process.env.PORT}`);
})