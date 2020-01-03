from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.book),
    url(r'^author$', views.author),
    url(r'^(?P<section>\w+)Add$', views.addProcess),
    url(r'^(?P<section>\w+)Desc/(?P<id>\d+)$', views.displayDesc),
    url(r'^(?P<newAppend>\w+)Append/(?P<id>\d+)$', views.appendProcess),
]