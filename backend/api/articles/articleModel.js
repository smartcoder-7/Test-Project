const mongoose = require('mongoose');

const { Schema } = mongoose;
const articleSchema = new Schema(
  {
    source: {
      type: Object,
      required: true,
    },
    author: {
      type: String,
      default: '',
      required: true,
    },
    title: {
      type: String,
      default: '',
      required: true,
    },
    description: {
      type: String,
      default: '',
      required: true,
    },
    url: {
      type: String,
      default: '',
      required: true,
    },
    urlToImage: {
      type: String,
      default: '',
      required: true,
    },
    publishedAt: {
      type: Date,
      default: new Date(),
      required: true,
    },
    content: {
      type: String,
      default: '',
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model('Article', articleSchema);
