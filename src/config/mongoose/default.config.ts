export default {
  id: "xdb",
  url: process.env.DEFAULT_URL || "mongodb://localhost:27017/xdb",
  connectionOptions: {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
};
