from django.conf.urls import url
from . import views

urlpatterns= [
    url(r'^$', views.book),
    url(r'^author$', views.author),
    url(r'^authorsDesc/(?P<num>\w+)$', views.authorsDesc),
    url(r'^booksDesc/(?P<num>\w+)$', views.booksDesc),
]