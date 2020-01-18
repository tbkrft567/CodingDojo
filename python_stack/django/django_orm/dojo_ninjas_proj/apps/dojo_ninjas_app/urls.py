from django.conf.urls import url
from . import views

urlpatterns=[
    url(r'^$', views.index),
    url(r'^add_dojo$', views.dojo),# views. means we are going into the views file to access the dojo function#
    url(r'^Ninja$', views.dojo1)
]