from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.login),
    url(r'^register$', views.register),
    url(r'^login$', views.loginAttempt),
    url(r'^success$', views.success),
    url(r'^logout$', views.logout),
    url(r'^makeNote$', views.makeNote),
    url(r'^makeComment/(?P<noteId>\d+)$', views.makeComment),
    url(r'^deleteComment/(?P<commentId>\d+)$', views.deleteComment),

]