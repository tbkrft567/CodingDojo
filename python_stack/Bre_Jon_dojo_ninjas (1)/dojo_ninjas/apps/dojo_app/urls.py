from django.conf.urls import url
from . import views
                    
urlpatterns = [
    url(r'^$', views.index),
    url(r'^add_dojo$', views.add_dojo),
    url(r'^add_ninja$', views.add_ninja),
    url(r'^delete/(?P<my_val>\d+)$', views.delete)
]