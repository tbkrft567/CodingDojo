from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = '947'


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/users', methods=['POST'])
def create_user():
    print("Got Post Info")
    print(request.form)
    session['name'] = request.form['name']
    session['email'] = request.form['email']
    print(session['name'])
    print(session['email'])
    return redirect('/show')

@app.route('/show')
def show_user():
    print("showing the User Info From the Form")
    print(request.form)
    return render_template('show.html', nameHTML=session['name'], emailHTML=session['email'])


if __name__ == "__main__":
    app.run(debug=True)
