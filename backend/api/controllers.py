#from django.shortcuts import render

# Create your views here.
from django.contrib.auth.models import *
from django.contrib.auth import *
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
#from django.shortcuts import render_to_response
from django.template import RequestContext
from django_filters.rest_framework import DjangoFilterBackend


from django.shortcuts import *

# Import models
from django.db import models
from django.contrib.auth.models import *
from api.models import *

#REST API
from rest_framework import viewsets, filters
from rest_framework_json_api import parsers, renderers
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.renderers import JSONRenderer

from django.contrib.auth import authenticate, login, logout
from rest_framework.permissions import *
from rest_framework.decorators import *
from rest_framework.authentication import *

from serializers import *

#filters
#from filters.mixins import *

from api.pagination import *
import json, datetime, pytz
from django.core import serializers
import requests

def home(request):
    return render_to_response('ember/index.html')

class MenuDetail(APIView):
    #Show perticular food menu based on the id
    permission_classes = (AllowAny,)
    parser_classes = (parsers.JSONParser,)
    renderer_classes = (renderers.JSONRenderer, )


    # #get a single food item detail by an id
    # def get(self, request, id=None, format=None):
    #     fmenus = Fmenu.objects.get(pk=id)
    #     json_data = serializers.serialize('json',[fmenus])
    #     content = {'fmenus':json_data}
    #     return HttpResponse(json_data, content_type='json')

    #delete a food item details
    def delete(self, request, id):
        Fmenu.objects.filter(pk=id).delete()
        return Response({'success':True}, status=status.HTTP_200_OK)

    #modify existing food item details
    def put(self,request,id):
        fmenus = Fmenu.objects.get(pk=id)

        fmenus.name = request.data.get('name')
        fmenus.desc = request.data.get('desc')
        fmenus.price = int(request.data.get('price'))
        fmenus.calories = int(request.data.get('calories'))

        try:
            fmenus.clean_fields()
        except ValidationError as e:
            print e
            return Response({'success':False, 'error':e}, status=status.HTTP_400_BAD_REQUEST)
        dog.save()
        return Response({'success': True}, status=status.HTTP_200_OK)


class FmenuViewSet(viewsets.ModelViewSet):
    #Show all food menu items
    permission_classes = (AllowAny,)
    parser_classes = (parsers.JSONParser,)
    renderer_classes = (renderers.JSONRenderer, )
    serializer_class = FmenuSerializer
    queryset = Fmenu.objects.all()

    # #get list of all food items
    # def get(self, request, format=None):
    #     fmenus = Fmenu.objects.all()
    #     json_data = serializers.serialize('json', fmenus)
    #     content = {'fmenus': json_data}
    #     return Response(json_data, content_type='json')

    # #create new food menu
    # def post(self, request, *args, **kwargs):
    #     print 'REQUEST DATA'
    #     print str(request.data)
    #
    #     name = request.data.get('name')
    #     desc = request.data.get('desc')
    #     price = int(request.data.get('price'))
    #     calories = int(request.data.get('calories'))
    #
    #     makeFmenu = Fmenu(
    #         name=name,
    #         desc=desc,
    #         price=price,
    #         calories=calories
    #     )
    #
    #     try:
    #         makeFmenu.clean_fields()
    #     except ValidationError as e:
    #         print e
    #         return Response({'success':False, 'error':e}, status=status.HTTP_400_BAD_REQUEST)
    #
    #     makeFmenu.save()
    #     return Response({'success': True}, status=status.HTTP_200_OK)
