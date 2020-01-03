from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.athlete),
    url(r'^award$', views.award),
    url(r'^(?P<section>\w+)Add$', views.addProcess),
    url(r'^(?P<section>\w+)Desc/(?P<id>\d+)$', views.displayDesc),
    url(r'^(?P<section>\w+)Append/(?P<id>\d+)$', views.appendProcess),
]