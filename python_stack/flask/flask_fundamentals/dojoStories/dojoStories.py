from flask import Flask, render_template, Response, redirect
app = Flask(__name__)

@app.route('/')
def stories():
    return render_template('index.html', actionHTML='openScene')

@app.route('/police', methods=['POST'])
def police():
    return render_template('index.html', actionHTML='police')

@app.route('/search', methods=['POST'])
def search():
    return render_template('index.html', actionHTML='search')

@app.route('/bartender', methods=['POST'])
def bartender():
    return render_template('index.html', actionHTML='bartender')

@app.route('/bathroom', methods=['POST'])
def bathroom():
    return render_template('index.html', actionHTML='bathroom')

@app.route('/car', methods=['POST'])
def car():
    return render_template('index.html', actionHTML='car')

@app.route('/house', methods=['POST'])
def home():
    return render_template('index.html', actionHTML='house')

@app.route('/factory', methods=['POST'])
def factory():
    return render_template('index.html', actionHTML='factory')

@app.route('/gun', methods=['POST'])
def gun():
    return render_template('index.html', actionHTML='gun')

@app.route('/instructions', methods=['POST'])
def instructions():
    return render_template('index.html', actionHTML='instructions')

if __name__ == "__main__":
    app.run(debug=True)