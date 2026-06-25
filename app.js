const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  // Base text jisme saari lines hain (Approx 4.6 KB)
  const baseText = `deep learning is a subset of machine learning techniques
artificial intelligence systems are used in healthcare and finance
python programming is beginner friendly and powerful
data preprocessing is a crucial step in building models
neural networks consist of layers of interconnected nodes
lstm solves the vanishing gradient problem in rnn
sequence models are used in speech and text processing
time series forecasting is used in stock market prediction
natural language processing includes tasks like translation
machine learning models can be supervised or unsupervised
deep learning uses neural networks with multiple layers
artificial intelligence can automate repetitive tasks
python libraries like tensorflow and pytorch are popular
data science projects require domain knowledge
neural networks can learn from large datasets
lstm networks can remember long term dependencies
sequence prediction is important in many applications
time series analysis is useful in finance and weather prediction
natural language processing powers chatbots and assistants
machine learning is used in recommendation systems
deep learning models require powerful hardware
artificial intelligence is the future of technology
python is used in web development and automation
data science combines statistics and programming
neural networks can classify images and text
lstm is used in text generation tasks
sequence models are important in language translation
time series data is sequential and time dependent
natural language processing is evolving rapidly
machine learning can detect patterns in data
deep learning is used in computer vision tasks
artificial intelligence improves decision making systems
python has many libraries for data analysis
data science is a growing field worldwide
neural networks are used in voice recognition
lstm networks are used in speech recognition
sequence learning is important in robotics
time series forecasting helps businesses plan ahead
natural language processing is used in search engines
machine learning models require evaluation and tuning
deep learning models can overfit if not regularized
artificial intelligence can analyze big data efficiently
python is easy to learn and implement
data science requires understanding of algorithms
neural networks improve with more training epochs
lstm is a special type of recurrent neural network
sequence models are widely used in AI applications
time series data is used in energy consumption prediction
natural language processing is used in sentiment analysis
machine learning is used in fraud detection systems
deep learning can generate realistic images and text
artificial intelligence is used in self driving cars
python is the most popular language for AI
data science tools include pandas and numpy
neural networks can be trained using backpropagation
lstm networks can capture long term dependencies
sequence prediction is used in weather forecasting
time series analysis helps understand trends
natural language processing enables machine translation
machine learning improves search engine results
deep learning models can be very accurate
artificial intelligence is applied in robotics
python supports multiple programming paradigms
data science involves data collection and analysis
neural networks are powerful for pattern recognition
lstm networks are effective for sequential data
sequence models can be trained using large datasets
time series prediction is important for business analytics
natural language processing is used in virtual assistants\n`;

  // 22 baar repeat karne par yeh exact 100 KB+ (approx 102 KB) ka text block banayega
  const largeData = baseText.repeat(22);
  
  res.end(largeData);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
