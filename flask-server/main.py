from flask import Flask, jsonify , request
from flask_cors import CORS
import json


import nltk
nltk.download('popular')
from nltk.stem import WordNetLemmatizer
lemmatizer = WordNetLemmatizer()
import pickle
import numpy as np
from keras.models import load_model
model = load_model('chatbotmodel.h5')
import json
import random
intents = json.loads(open('intents.json').read())
words = pickle.load(open('words.pkl','rb'))
classes = pickle.load(open('classes.pkl','rb'))

def clean_up_sentence(sentence):
    # tokenize the pattern - split words into array
    sentence_words = nltk.word_tokenize(sentence)
    # stem each word - create short form for word
    sentence_words = [lemmatizer.lemmatize(word.lower()) for word in sentence_words]
    return sentence_words
# return bag of words array: 0 or 1 for each word in the bag that exists in the sentence
def bow(sentence, words, show_details=True):
    # tokenize the pattern
    sentence_words = clean_up_sentence(sentence)
    # bag of words - matrix of N words, vocabulary matrix
    bag = [0]*len(words)  
    for s in sentence_words:
        for i,w in enumerate(words):
            if w == s: 
                # assign 1 if current word is in the vocabulary position
                bag[i] = 1
                if show_details:
                    print ("found in bag: %s" % w)
    return(np.array(bag))
def predict_class(sentence, model):
    # filter out predictions below a threshold
    p = bow(sentence, words,show_details=False)
    res = model.predict(np.array([p]))[0]
    ERROR_THRESHOLD = 0.25
    results = [[i,r] for i,r in enumerate(res) if r>ERROR_THRESHOLD]
    # sort by strength of probability
    results.sort(key=lambda x: x[1], reverse=True)
    return_list = []
    for r in results:
        return_list.append({"intent": classes[r[0]], "probability": str(r[1])})
    return return_list
def getResponse(ints, intents_json):
    tag = ints[0]['intent']
    list_of_intents = intents_json['intents']
    for i in list_of_intents:
        if(i['tag']== tag):
            result = random.choice(i['responses'])
            break
    return result
def chatbot_response(msg):
    ints = predict_class(msg, model)
    res = getResponse(ints, intents)
    return res



app=Flask(__name__)
CORS(app)  

# member api route
@app.route("/members",methods=["GET","POST"]) 
def get_bot_response():
    if request.method == "POST":
        userText = json.loads(request.data)
        response=chatbot_response(userText["inputText"])
        return {"message":response}


if __name__=="__main__":
    app.run(debug=True)

 
 


# import random
# import json
# import pickle
# import numpy as np

# import nltk
# from nltk.stem import WordNetLemmatizer

# from tensorflow.keras.models import load_model
 

# lemmatizer = WordNetLemmatizer()

# intents = json.loads(open('intents.json').read())

# words = pickle.load(open('words.pkl', 'rb'))
# classes = pickle.load(open('classes.pkl', 'rb'))
# model = load_model('chatbotmodel.h5')

# def clean_up_sentence(sentence):
#     sentence_words = nltk.word_tokenize(sentence)
#     sentence_words = [lemmatizer.lemmatize(word)  for word in sentence_words]
#     return sentence_words

# def bag_of_words(sentence):
#     sentence_words= clean_up_sentence(sentence)
#     bag = [0] * len(words)
#     for w in sentence_words:
#         for i, word in enumerate(words):
#             if word == w:
#                 bag[i] = 1

#     return np.array(bag)

# def predict_class(sentence):
#     bow = bag_of_words(sentence)
#     res = model.predict(np.array([bow]))[0]
#     ERROR_THRESHOLD = 0.25
#     results = [[i,r] for i, r in enumerate(res) if r > ERROR_THRESHOLD]

#     results.sort(key=lambda  x:x[1], reverse=True)
#     return_list = []
#     for r in results:
#         return_list.append({'intent': classes[r[0]], 'probability': str(r[1])})
#     return return_list


# def get_response(intents_list,intents_json):
#     tag= intents_list[0]['intent']
#     list_of_intents =intents_json['intents']
#     for i in list_of_intents:
#         if i['tag'] == tag:
#             result = random.choice(i['responses'])
#             break
#     return result

# print("|============= Welcome to College Equiry Chatbot System! =============|")
# print("|============================== Feel Free ============================|")
# print("|================================== To ===============================|")
# print("|=============== Ask your any query about our college ================|")
# while True:
#     message = input("| You: ")
#     if message == "bye" or message == "Goodbye":
#         ints = predict_class(message)
#         res = get_response(ints, intents)
#         print("| Bot:", res)
#         print("|===================== The Program End here! =====================|")
#         exit()

#     else:
#         ints = predict_class(message)
#         res = get_response(ints, intents)
#         print("| Bot:", res)