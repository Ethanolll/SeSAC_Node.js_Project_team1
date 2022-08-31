const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require("body-parser");
const path = require("path");
const session = require("express-session");
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser('1234'));

app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: "secret key",
  })
);

const userRouter = require("./routes/user");
const recipeRouter = require("./routes/recipe");
const rankingRouter = require("./routes/ranking");

// const { Script } = require("vm");

// 메인 페이지
app.get("/", function (req, res) {
  const user = req.session.user;

  if (user != undefined) {
    res.render("index", { isLogin: true, user: user, isLogout: false });
  } else {
    res.render("index", { isLogin: false, isLogout: false });
  }
});

// 로그아웃
app.get("/logout", (req, res) => {
  const user = req.session.user;
  req.session.destroy(function (err) {
    res.render("index", {isLogout: true, isLogin: false});
  });
});

app.get("/team", (req, res) => {
  const user = req.session.user;

  if (user != undefined) {
    res.render("team", { isLogin: true, user: user, isLogout: false });
  } else {
    res.render("team", { isLogin: false, isLogout: false });
  }
});

app.use("/user", userRouter);
app.use("/recipe", recipeRouter);
app.use("/ranking", rankingRouter);

app.listen(port, () => {
  console.log("Server Port : ", port);
});
