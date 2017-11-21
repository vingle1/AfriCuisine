from django.conf.urls import include, url

#Django Rest Framework
from rest_framework import routers

from api import controllers
from django.views.decorators.csrf import csrf_exempt

#REST API routes
router = routers.DefaultRouter(trailing_slash=False)

urlpatterns = [

    url(r'^session', csrf_exempt(controllers.Session.as_view())),
    url(r'^fmenu/$', csrf_exempt(controllers.DogList.as_view())),
    url(r'^fmenu/(?P<id>[0-9]+)/$', csrf_exempt(controllers.DogDetail.as_view())),
    url(r'^', include(router.urls)),
]
