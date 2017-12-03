# TensorFlow-Machine-Learning-Project

# Introduction
Hello! Welcome to this pretty nifty number recognition app! It ain't pretty but it does the trick, so how does it all work?

Using Javascript, html, & python I've built a simple web application with a  neural network in the background to make some predictions based off what you draw on the canvas. The image you draw is sent using an AJAX request to the python webapp script which returns a promise... the predicted number.

The model which is built using Keras a high level api that utilizes Tensorflow is trained beforehand using the mnist handwritten digits dataset, to predict the number that it's sent.

## Requirements & Installation

To run this program we need the following installed on our system:

 1. [Python](https://www.python.org/downloads/)
 2. [flask](http://flask.pocoo.org/)
 2. [numpy](http://www.numpy.org/)
 2. [scipy](https://www.scipy.org/)
 2. [pillow](https://python-pillow.org/)
 2. [h5py](http://www.h5py.org/)
 2. [Tensorflow](https://www.tensorflow.org/install/)
 2. [Keras](https://keras.io/)

 ##### Install python first! Then run the following command:

``` pip install -r requirements.txt ```

This will install all the packages that we need to run this app!

## Quick start
To begin we will need to launch an instance of CMD or Terminal etc.
Then run the following command :

`cd to/the/directory/of/The-Project/`

Once in our project directory we run this:

`python setup.py`

This will create any directories that are required, train the model & launch the webapp!

Now go visit 127.0.0.1:5000 in your browser (not IE... Cause IE...) and enjoy! :)

...

## Some Technical information

### What is the [MNIST](http://yann.lecun.com/exdb/mnist/) data set?

The MNIST database of handwritten digits, has a training set of 60,000 examples, and a test set of 10,000 examples. It is a subset of a larger set available from NIST. The digits have been size-normalized and centered in a fixed-size image.
It is a good database for people who want to try learning techniques and pattern recognition methods on real-world data while spending minimal efforts on preprocessing and formatting.

### What are Tensorflow & Keras?

###### [Tensorflow](https://www.tensorflow.org/)

TensorFlow™ is an open source software library for numerical computation using data flow graphs. Nodes in the graph represent mathematical operations, while the graph edges represent the multidimensional data arrays (tensors) communicated between them. The flexible architecture allows you to deploy computation to one or more CPUs or GPUs in a desktop, server, or mobile device with a single API.

###### [Keras](https://keras.io/)

Keras is a high-level neural networks API, written in Python and capable of running on top of TensorFlow. It was developed with a focus on enabling fast experimentation. Being able to go from idea to result with the least possible delay is key to doing good research.

Use Keras if you need a deep learning library that:

1. Allows for easy and fast prototyping (through user friendliness, modularity, and extensibility).
2. Supports both convolutional networks and recurrent networks, as well as combinations of the two.
3. Runs seamlessly on CPU and GPU.
4. Read the documentation at Keras.io.

Keras is compatible with: Python 2.7-3.6.

