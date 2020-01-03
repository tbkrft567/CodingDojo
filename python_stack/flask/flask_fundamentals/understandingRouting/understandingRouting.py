from flask import Flask
app = Flask(__name__)
# try: 
@app.route('/')
def sayHello():
    return 'Hello World'


@app.route('/dojo')
def sayDojo():
    return 'Dojo!'

@app.route('/say/<name>')
def sayHiName(name):
    return 'Hello, '+name

@app.route('/repeat/<int:count>/<word>')
def sayRepeater(count, word):
    newStr = ""
    for x in range(count):
        newStr += word+"\n"

    return newStr

@app.route('/<path:u_path>')
def catch_(u_path):
    print(repr(u_path))
    return 'Nope'
    
if __name__ == "__main__":
    app.run(debug=True)