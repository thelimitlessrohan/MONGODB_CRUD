const mongoose = require('mongoose');

main().then((res) => {
    console.log(res); console.log("Connection Successful")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const userSchema = new mongoose.Schema({
    name : String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userSchema);

//const user1 = new User ({name: "Ram", email:"ram@gmail.com", age: 22 });
// inserted
//const user2 = new User ({name: "Sham", email:"sham@gmail.com", age: 23 });

//user2.save();

// User.find({}).then(res => {
//     console.log(res);
// })

// User.updateOne({name:"Ram"},{age: 25}).then(res => {
//       console.log(res);
// })

//User.deleteOne({name:"Ram"});
//User.findByIdAndDelete({name:"Ram"}); //in case you want to give confirmation to user