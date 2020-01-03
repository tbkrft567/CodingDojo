from flask import Flask
app = Flask(__name__)



@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/darthvader')
def yeah():
    return 'This is the age of DarthVader'

@app.route('/sayhi/<name>')
def sayhi(name):
    return name+', darthVader is your father! ...'+name+': Noooooo!'

@app.route('/addMe/<num>')
def addMe(num):
    return str(int(num) + 1)

if __name__=="__main__":
    app.run(debug=True)