# import any required packages, gzip, numpy, keras, and the mnist dataset
# adapted from: https://github.com/emerging-technologies/keras-iris
# reference: https://keras.io/datasets/#mnist-database-of-handwritten-digits

import numpy as np
from keras.datasets import mnist
import keras as kr

# 
(input_train, output_train), (input_test, output_test) = mnist.load_data()

# check whats what before going ahead
print(input_train.shape, input_test.shape)

# Reshape the data for training, no of images & the size of each (28*28) as floats 
input_train = input_train.reshape(60000,784).astype('float32')
input_test = input_test.reshape(10000, 784).astype('float32')

#scale input to be 0 or 1, rather than 0 - 255
input_train /= 255
input_test /= 255

# endocde the category integers as binary categorial vairables.
output_train = kr.utils.to_categorical(output_train)
output_test = kr.utils.to_categorical(output_test)

# create a model using the sequential to create a linear stack of layers
model = kr.models.Sequential()

#add an initial layer with input shape & hidden layer of 512 nodes
model.add(kr.layers.Dense(512, input_shape=(784,)))

# using relu, any values that fall below to 0 wil be set to 0
# this will reduce our loss over using the likes of sigmoid also allows for faster training of our model
# effecient gradient propigation
model.add(kr.layers.Activation('relu'))

# Dropout consists in randomly setting a fraction rate of input units to 0 at each update during training time, which helps prevent overfitting.
model.add(kr.layers.Dropout(0.2))

# add the output layer
model.add(kr.layers.Dense(10))

# normalize, real values in the range [0, 1] that sum to 1.
model.add(kr.layers.Activation('softmax'))

# configure the model for training
# uses the adam optimizer and categorialcross entropy as the loss function
# add in some extra metrics, accuracy being the only one.
model.compile(optimizer="adam", loss="categorical_crossentropy", metrics=["accuracy"])

# fit the model 
# Batch size defines number of samples that going to be propagated through the network.
# epochs represents the number of times the training set will be looped over
# verbose will run in silent mode by selecting 2
model.fit(input_train, output_train, batch_size=128, epochs=8, verbose=2)

# Returns the loss value & metrics values for the model in test mode.
# Computation is done in batches.
loss, accuracy = model.evaluate(input_test, output_test, verbose=2)

# print out the loss and accuracy
print("accuracy: ", accuracy)
print("loss: ", loss)

# predict the number
prediction = np.around(model.predict(np.expand_dims(input_test[0], axis=0))).astype(np.int)[0]
print("Actual: %s\tEstimated: %s" % (output_test[0].astype(np.int), prediction))

# Save the model to a file for later use.
model.save("./data/mnist_nn.h5")
# Load the model again with: model = load_model("./data/mnist_nn.h5")

