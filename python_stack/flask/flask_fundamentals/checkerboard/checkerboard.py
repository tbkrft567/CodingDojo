from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def noInput():
    return render_template('index.html', rows=8, columns=8)

@app.route('/<int:rows>')
def rowInput(rows):
    return render_template('index.html', rows=rows, columns=8)

@app.route('/<int:rows>/<int:columns>')
def sizeInput(rows, columns):
    return render_template('index.html', rows=rows, columns=columns)

@app.route('/<int:rows>/<int:columns>/<color1>/<color2>')
def colorInput(rows, columns, color1, color2):
    return render_template('index.html', rows=rows, columns=columns, colorHTML1=color1, colorHTML2=color2)

if __name__ == "__main__":
    app.run(debug=True)