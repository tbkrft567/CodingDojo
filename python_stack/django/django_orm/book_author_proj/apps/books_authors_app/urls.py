from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.books),
    url(r'^author$', views.authors),
    url(r'^add(?P<section>\w+)$', views.addProcess),
    url(r'^(?P<section>\w+)Desc/(?P<id>\d+)$', views.descDisplay),
    url(r'^append_(?P<section>\w+)/(?P<id>\d+)$', views.appendProcess),
]