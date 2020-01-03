from flask import Flask, render_template, request, redirect
app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/result', methods=['POST'])
def processForm():
    print('**in form!!**')
    formName = request.form['name']
    formLocation = request.form['location']
    formLanguage = request.form['language']
    formTeacher = request.form.getlist('teacher')
    formComment = request.form['comment']
    return render_template('show.html', formNameHTML=formName, formLocationHTML=formLocation, formLanguageHTML=formLanguage, formTeacherHTML=formTeacher, formCommentHTML=formComment)


if __name__ == "__main__":
    app.run(debug=True)
