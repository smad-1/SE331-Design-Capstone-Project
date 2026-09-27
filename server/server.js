// server.js
// Entry point - keeps "creating the app" separate from "starting the server".
// This separation also makes automated testing easier later (not needed to
// explain that part in class unless there's time).
 
const app = require("./app");
 
const PORT = 3000;

// app.get("/", (req, res) => {
//   res.send("Server is working!");
// });
 
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

