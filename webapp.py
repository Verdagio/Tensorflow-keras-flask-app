#! 
# Ref: http://flask.pocoo.org/docs/0.12/patterns/fileuploads/
import os, re, base64
import keras as kr
import numpy as np
from scipy.misc import imread, imresize
from flask import Flask, request, redirect, url_for
from werkzeug.utils import secure_filename



#load up our previously trained model
model = kr.models.load_model("./data/mnist_nn.h5")
UPLOAD_FOLDER = './uploads'
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS



@app.route('/uploadFile', methods = ['POST'])
def uploaded():
    #look at the data
    #print(request.get_data())
    #regex the data to extract the file data stuff that we dont need from ivbor...etc.
    imageParser(request.get_data())

    img = imread('./uploads/canvasImg.png', mode='L')    # read the file in greyscale
    img = np.invert(img)                                 # invert the image for added accuracy ;)
    img = imresize(img,(28,28))                          # resize the image to 28 * 28
    img = img.reshape(1,28,28,1)                         # Gives a new shape to an array without changing its data

    prediction = model.predict(self, x, batch_size=32, verbose=0)

    print(prediction)
    return 'hold on'


def imageParser(data):
    # using a regex we find the first , and take all that follows :)
    tmp = re.search(b'base64,(.*)', data).group(1)
    # now that the image data is gone, need to save it as an image to the uploads dir
    with open('./uploads/canvasImg.png','wb') as output:
       output.write(base64.decodebytes(tmp))#somethings not working here :(

@app.route('/', methods=['GET', 'POST'])
def home():
    return app.send_static_file('index.html')

# run our app on localhost:5000
app.run(host='127.0.0.1', port=5000, debug=True)
