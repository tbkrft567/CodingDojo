from flask import Flask, render_template, redirect, request, session
import random
app = Flask(__name__)
app.secret_key = '947'


@app.route('/')
def home():
    pass
    return render_template('index.html')

@app.route('/process', methods=['POST'])
def process():
    if 'activities' not in session:
        session['activities'] = ""
    if 'totalGold' not in session:
        session['totalGold'] = 0

    session['userInput'] = request.form['building']
    if session['userInput'] == 'farm':
        session['gold'] = random.randint(10,20)
        session['activities'] = 'Earned '+str(session['gold'])+' gold from the '+ session['userInput']+'!\n' + session['activities']
    if session['userInput'] == 'cave':
        session['gold'] = random.randint(5,10)
        session['activities'] = 'Earned '+str(session['gold'])+' gold from the '+ session['userInput']+'!\n' + session['activities']
    if session['userInput'] == 'house':
        session['gold'] = random.randint(2,5)
        session['activities'] = 'Earned '+str(session['gold'])+' gold from the '+ session['userInput']+'!\n' + session['activities']
    if session['userInput'] == 'casino':
        session['gold'] = random.randint(-50,50)
        session['activities'] = 'Earned '+str(session['gold'])+' gold from the '+ session['userInput']+'!\n' + session['activities']

    session['totalGold'] += session['gold'] 
    return redirect('/')

if __name__ == "__main__":
    app.run(debug=True)
