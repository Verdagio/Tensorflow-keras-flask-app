# TensorFlow-Keras-Number-Recognition-App

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

 ### Install python! Then do the following:

## Quick start
To begin we will need to launch an instance of CMD or Terminal etc.
Then run the following command :

`cd to/the/directory/of/The-Project/`

Once in our project directory we run this:

`python setup.py`

This will create any directories that are required, install all packages that are needed, train the model, & then launch the webapp!

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

## The Neural Network

Neural Networks are modeled as collections of neurons that are connected in an acyclic graph. Cycles are not allowed since that would imply an infinite loop in the forward pass of a network. Instead of an amorphous blobs of connected neurons, Neural Network models are often organized into distinct layers of neurons.

To create our model we'll use a linear stack, by assigning our model to keras.models.Sequential(). Next we add our first layer by by calling the .add() mehod and specify the amount of nodes in our hidden layer and the input shape. The model needs to know what input shape it should expect. For this reason, the first layer in a Sequential model (and only the first, because following layers can do automatic shape inference) needs to receive information about its input shape. Dense implements the operation: output = activation(dot(input, kernel) + bias) where activation is the element-wise activation function passed as the activation argument.

### Relu Activation function

![ReLU](http://cs231n.github.io/assets/nn1/relu.jpega)

ReLU. The Rectified Linear Unit computes the function f(x)=max(0,x)f(x)=max(0,x). In other words, the activation is simply thresholded at zero (see image above on the left). There are several pros and cons to using the ReLUs:

###### Pros
1. It was found to greatly accelerate (e.g. a factor of 6 in Krizhevsky et al.) the convergence of stochastic gradient descent compared to the sigmoid/tanh functions. It is argued that this is due to its linear, non-saturating form.
2.  Compared to tanh/sigmoid neurons that involve expensive operations (exponentials, etc.), the ReLU can be implemented by simply thresholding a matrix of activations at zero.

###### Cons
1. Unfortunately, ReLU units can be fragile during training and can “die”. For example, a large gradient flowing through a ReLU neuron could cause the weights to update in such a way that the neuron will never activate on any datapoint again. If this happens, then the gradient flowing through the unit will forever be zero from that point on. That is, the ReLU units can irreversibly die during training since they can get knocked off the data manifold. For example, you may find that as much as 40% of your network can be “dead" (i.e. neurons that never activate across the entire training dataset) if the learning rate is set too high. With a proper setting of the learning rate this is less frequently an issue.

Ref : [Convolutional Neural Networks for Visual Recognition](http://cs231n.github.io/neural-networks-1/)

