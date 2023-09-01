from django.urls import path
from .views import getinfo,createinfo,getinfobyid
urlpatterns=[
    path('get-info/',getinfo),
    path('create-info',createinfo),
    path('get-info/<str:pk>/',getinfobyid)
]