//External Module
const express = require("express");
const path = require('path');
//Local Module
const userRouter = require("./routes/userRouter");
const { hostRouter, registeredHomes } = require("./routes/hostRouter");
const homeController = require("./controllers/homes");
const errorController = require("./controllers/error");
const rootDir = require("./utils/pathUtil");
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

app.get("/", homeController.getHome);
app.use(express.static(path.join(rootDir, "public")));

app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
});

app.use(express.urlencoded({extended : true}));
app.use(userRouter);
app.use("/host", hostRouter);
app.use(errorController.pageNotFound);

app.listen(3003, ()=> {
    console.log(`Server start on port http://localhost:3003`);
});