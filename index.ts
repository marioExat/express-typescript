import express from "express";
import {Request, Response} from "express";
const app = express();

// app.get('/', (req,res) => {
//     res.send('Hello from express and typescript')
// });

app.route('/')
.get((req: Request, res: Response) => {
    res.status(200).send({
    message: 'GET request successfulll!!!!'
    })
})

// Contact 
app.route('/contact')
.get((req: Request, res: Response) => {
    res.status(200).send({
        message: 'Get request successful'
    })
})
.post((req: Request, res: Response) => {
    // Get a single contact detail
    res.status(200).send({
        message: 'Put request successful'
    })
})
.delete((req: Request, res:Response) => {
    // Delete a contact
    res.status(200).send({
        message: 'Delete request successful'
    })
})



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on PORT ${port}`));