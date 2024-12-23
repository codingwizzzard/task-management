const mongoose = require('mongoose');
const Event = require('./models/Event'); // Adjust the path if necessary
const { MONGO_URL } = require('./config'); // Ensure you're pulling MONGO_URL from the correct config file

const testDb = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database Connected');
    
    // Fetch all events to see if the connection and schema are correct
    const events = await Event.find();
    console.log('Fetched Events:', events);
    process.exit(0); // Exit the process after testing
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1); // Exit with failure
  }
};

testDb();
