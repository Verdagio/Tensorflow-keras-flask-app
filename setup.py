
#Ready our environment.
import os


# create our data directory for incoming files
os.mkdir('./data')

# run the learn.py file to train the model
print("Running learn.py! This will train our model.. hold on a sec\n")

os.system('python learn.py')

print("Done! mnist-nn.h5 file generated in ./data directory\n Now starting our api")

os.system('python webapp.py')


