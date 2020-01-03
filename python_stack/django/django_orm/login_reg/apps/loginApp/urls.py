from django.conf.urls import url
from . import views

urlpatterns=[
    url(r'^$', views.index), 
    url(r'^register$', views.register), 
    url(r'^loginAttempt$', views.loginAttempt), 
    url(r'^success$', views.success), 
    url(r'^logOut$', views.logOut), 
]