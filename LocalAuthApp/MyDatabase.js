var Schema = mongoose.Schema;
var UserDetail = new Schema({
    username: String,
    password: String
}, {
    collection: 'userInfo'
});
var UserDetails = mongoose.model('userInfo', UserDetail);
mongoose.connect('mongodb://localhost/MyDatabase');