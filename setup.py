
#Ready our environment.
import os


# create our data directory for incoming files
os.mkdir('./data')
os.mkdir('./uploads')

# install the requirements for the app
os.system('pip install -r requirements.txt')

# run the learn.py file to train the model
print("Running learn.py! This will train our model.. hold on a sec\n")

os.system('python learn.py')

# launch the webapp
print("Done! mnist-nn.h5 file generated in ./data directory\n Now starting our api")

os.system('python webapp.py')


