from flask import render_template
from app import app

@app.route('/')
@app.route('/index')
def index():
    user = {'username': 'Sakhile'}
    posts = [
        {
            'author': {'username': 'Tema'},
            'body': 'Beautiful day in Portland!'
        },
        {
            'author': {'username': 'Nsika'},
            'body': 'The Avengers movie was so cool!'
        }
    ]
    return render_template('index.html', title='Home', user=user, posts=posts)
