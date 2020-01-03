from flask import Flask, render_template, request, redirect
app = Flask(__name__)


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/checkout', methods=['POST'])
def checkout():
    print(request.form)
    strawberryCount = request.form['strawberry']
    raspberryCount = request.form['raspberry']
    appleCount = request.form['apple']
    first_name = request.form['first_name']
    last_name = request.form['last_name']
    student_id = request.form['student_id']
    return render_template("checkout.html"
    , strawberryCountHTML=strawberryCount
    , raspberryCountHTML=raspberryCount
    , appleCountHTML=appleCount
    , totalFruit= int(strawberryCount)+int(raspberryCount)+int(appleCount)
    , first_nameHTML=first_name
    , last_nameHTML=last_name
    , student_idHTML=student_id)


@app.route('/fruits')
def fruits():
    return render_template("fruits.html")


if __name__ == "__main__":
    app.run(debug=True)
