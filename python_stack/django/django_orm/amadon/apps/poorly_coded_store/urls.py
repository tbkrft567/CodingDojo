from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^checkout/(?P<productId>\d+)$', views.checkout),
    url(r'^summaryPage$', views.summaryPage),
]