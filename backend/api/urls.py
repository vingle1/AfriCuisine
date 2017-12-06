from django.conf.urls import include, url

#Django Rest Framework
from rest_framework import routers

from api import controllers
from django.views.decorators.csrf import csrf_exempt

#REST API routes
router = routers.DefaultRouter(trailing_slash=False)
router.register(r'fmenus', controllers.FmenuViewSet)

urlpatterns = [
    #
    # url(r'^fmenu/$', csrf_exempt(controllers.MenuList.as_view())),
    # url(r'^fmenu/(?P<id>[0-9]+)/$', csrf_exempt(controllers.MenuDetail.as_view())),
    url(r'^', include(router.urls)),
]
