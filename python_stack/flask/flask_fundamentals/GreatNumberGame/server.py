from flask import Flask, render_template, redirect, request, session
import random
app = Flask(__name__)
app.secret_key = '947'

@app.route('/')
def funct():

    return render_template('index.html')

@app.route('/guess', methods=['POST'])
def guess():
    if 'random' not in session:
        session['random']=random.randint(1,100)    
    
    session['userInput'] = request.form['guess']
    if int(session['userInput']) > int(session['random']):
        session['result'] = 'Too High!'
    elif int(session['userInput']) < int(session['random']):
        session['result'] = 'Too Low!'
    else: 
        session['result'] = 'CORRECT!!'

    return redirect('/')



@app.route('/reset')
def reset():
    session.clear()
    return redirect('/')

if __name__ == "__main__":
    app.run(debug=True)