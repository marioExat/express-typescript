"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// app.get('/', (req,res) => {
//     res.send('Hello from express and typescript')
// });
app.route('/')
    .get((req, res) => {
    res.status(200).send({
        message: 'GET request successfulll!!!!'
    });
});
// Contact 
app.route('/contact')
    .get((req, res) => {
    res.status(200).send({
        message: 'Get request successful'
    });
})
    .post((req, res) => {
    // Get a single contact detail
    res.status(200).send({
        message: 'Put request successful'
    });
})
    .delete((req, res) => {
    // Delete a contact
    res.status(200).send({
        message: 'Delete request successful'
    });
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on PORT ${port}`));
//# sourceMappingURL=index.js.map