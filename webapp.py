import os, re
import base64
import keras as kr
import numpy as np
import tensorflow as tf
from scipy.misc import imread, imresize
from flask import Flask, request, redirect, url_for

UPLOAD_FOLDER = './uploads'

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

#load up our previously trained model
def init():

    model = kr.models.load_model("./data/mnist_nn.h5")
    graph = tf.get_default_graph()

    return model, graph

def imageParser(data):
    # using a regex we find 'base64,' and use everything that follows :)
    tmp = re.search(b'base64,(.*)', data).group(1)
    # now that the image data is gone, need to save it as an image to the uploads dir
    # ref: https://stackoverflow.com/questions/2323128/convert-string-in-base64-to-image-and-save-on-filesystem-in-python
    with open('./uploads/canvasImg.png','wb') as output:
       output.write(base64.b64decode(tmp))

# predict the number 
def predictNumber(file):
    model, graph = init()
    with graph.as_default():
        prediction = model.predict(file) # try now to predict using our pre trained model
        response = np.array_str(np.argmax(prediction))
    
    return response

@app.route('/uploadFile', methods = ['POST'])
def uploaded():

    #regex the data to extract the file data stuff that we dont need from ivbor...etc.
    imageParser(request.get_data())
    img = imread('./uploads/canvasImg.png', mode='L')    # read the file in greyscale
    img = imresize(img,(28,28))                          # resize the image to 28 * 28
   
    # Gives a new shape to an array without changing its data
    newImg = np.ndarray.flatten(np.array(img)).reshape(1, 784).astype('float32')
   
    # convert the data to float so we can divide it by 255
    # just like we did in learn.py
    # divide by 255 to make it 0 or 1
    newImg /= 255

    response = predictNumber(newImg)

    return response
 
@app.route('/', methods=['GET'])
def home():
    return app.send_static_file('index.html')

# run our app on localhost:5000
app.run(host='127.0.0.1', port=5000, debug=True)
