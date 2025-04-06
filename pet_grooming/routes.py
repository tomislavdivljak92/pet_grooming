from flask import render_template

def init_routes(app):
    @app.route('/')
    def home():
        return render_template('main.html')

    @app.route('/services')
    def services():
        return render_template('services.html')

    @app.route('/gallery')
    def gallery():
        return render_template('gallery.html')
    
    @app.route('/image_page')
    def image_page1():
        return render_template('image_page1.html')
