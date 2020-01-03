from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = '947'

@app.route('/')
def home():
    if 'count' in session:
        if 'increment' in session:
            session['count']+=int(session['increment'])
        else:
            session['count']+=1
    else:
        session['count']=1
    if 'view' in session:
        session['view']+=1
    else:
        session['view']=1
    return render_template('index.html')

@app.route('/destroySession')
def destroySession():
    session.pop('count')
    return redirect('/')

# @app.route('/plusTwo')
# def plusTwo():
#     return redirect('/')

@app.route('/incrementPage', methods=['POST'])
def increment():
    session['increment']=request.form['incrementHTML']
    return redirect('/')

@app.route('/refresh')
def refresh():
    return redirect('/')

if __name__ == "__main__":
    app.run(debug=True)