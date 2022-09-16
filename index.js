const express = require("express");
const mongoose = require("mongoose");
const port = 3000;
const app = express();

app.use(express.json());
app.use(require("./routes/medicines.route"));
app.use(require("./routes/baskets.route"));
app.use(require("./routes/users.route"));
app.use(require("./routes/medicines.route"));

mongoose.connect(
  "mongodb+srv://fpjohns:denni2010@cluster0.7omondk.mongodb.net/medicines?retryWrites=true&w=majority",
  (err) => {
    if (err) {
      console.log(err);
    }
    console.log("db connected");
    app.listen(port, () => {
      console.log("started");
    });
  }
);
