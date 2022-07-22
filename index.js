const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    title: String,
    body: String,
    category_ids: [
        mongoose.Schema.Types.ObjectId
    ]
});

const UsersSchema = new mongoose.Schema({
    name: String,
    email: String,
    social_profile: {
        linkedin: String,
        facebook: String,
        twitter: String,
        github: String,
        instagram: String
    },
    addresses: [
        {
            line1: String,
            CountQueuingStrategy: String,
            state: String,
            pinCode: String
        }
    ],
    blog_id: mongoose.Schema.Types.ObjectId
});

const CategorySchema = new mongoose.Schema({
    name: String
})

const CommentsSchema = new mongoose.Schema({
    blog_id: mongoose.Schema.Types.ObjectId,
    user_id: mongoose.Schema.Types.ObjectId,
    message: String,
    rating: Number
})

const LikesSchema = new mongoose.Schema({
    user_id: mongoose.Schema.Types.ObjectId,
    blog_id: mongoose.Schema.Types.ObjectId,
    emoji: String
})


const Blog = mongoose.model('Blog', BlogSchema);
const User = mongoose.model('User', UsersSchema);
const Category = mongoose.model('Category', CategorySchema);
const Comment = mongoose.model('Comment', CommentsSchema);
const Link = mongoose.model('Like', LikesSchema);

