from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def home():
    return 'Hello World'

@app.route('/play/<int:counter>')
def boxes_color(counter, color):
    return render_template("index.html", times=counter, colorHTML=color)

@app.route('/play/<int:counter>/<color>')
def boxes_color(counter, color):
    return render_template("index.html", times=counter, colorHTML=color)

if __name__ == "__main__":
    app.run(debug=True)