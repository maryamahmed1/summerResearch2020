#!/usr/bin/env python
# coding: utf-8

# In[1]:


import pandas as pd
import numpy as np
import math
from itertools import chain


# In[2]:


df = pd.read_csv('/Users/Maryam/Documents/summer-Research-2020/ImgClassAnalysis/imgClassificationData.csv')


# In[5]:


# Temporary way of pulling out the data we actually want to analyze. Confirm with Cindy first. 
# check if postQs are answered
# where/when to drop the nan values
data = df.dropna(subset=['Q75']).drop([0,1, 117, 123]).reset_index()
# data = df.iloc[[124]] //this worked for cindy
# data.dropna(subset=['Q75'])
# data = data[['Q75']].reset_index()
data

#  want to separate the data for inv and orig for each subject


# In[24]:


# traversing through each row to pull out each subjects data
for index,subject_data in data.iterrows():
    subject_data = subject_data.to_frame().T
    # need to aggregate allStims and allSelections for each subject
    allStimuli = subject_data['allStims1']
    allSelects = subject_data['selections1']
    for i in range(2,21):
        stimCol = data['allStims' + str(i)]
        allStimuli = pd.concat([stimCol,allStimuli])
        

        selectsCol = data['selections' + str(i)]
        allSelects = pd.concat([selectsCol,allSelects])
    
# selecting every third entry for response column
    allStimuli = allStimuli.tolist()
    allSelects = allSelects.tolist()
    for i in range(len(allStimuli)):
        allStimuli[i] = allStimuli[i].split(',')
        allSelects[i] = allSelects[i].split(',')
    allStimuli = list(chain.from_iterable(allStimuli))
    allSelects = list(chain.from_iterable(allSelects))
    allSelects = allSelects[1:][::3]
        
# trying to figure out how to select inv and orig based on 37 and 39 keycode
    image = []
    stim = allStimuli[::2]
    stimuluses = []
    for i in range(len(allSelects)):
        if allSelects[i] == '37':
            if (stim[i].find('inv') != -1):
                image.append(-1)

            else:
                image.append(1)
            
            word = stim[i].split('_')
            stimuluses.append(word[0])
        elif allSelects[i] == '39':
            if (stim[i].find('inv') != -1):
                image.append(-1)
            else:
                image.append(1)
            
            word = stim[i].split('_')
            stimuluses.append(word[0])


# creating new desired tables for each subject
    # creating a dictionary to store all dataframes of data for each subject
    frames = {}
    
    # -1 or 1 if inv or orig, left=37 right=39
    desired = pd.DataFrame(columns=['stimulus', 'response', 'subject'], index=[i for i in range(0,1000)])
    desired['stimulus'] = stimuluses
    desired['response'] = image
    desired['subject'] = index + 1
    
    desired = desired.sort_values(by='stimulus').reset_index(drop=True)
    
    frames.update({index+1: desired}) #Appending to the dictionary

# len(allSelects), len(allStimuli[::2]), len(image)

frames[1] #returning the dictionary with all the frames, you can index through them to get each subject's data


# In[ ]:





# In[ ]:




