from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import modelserializer
from .models import info
@api_view(['GET'])
def getinfo(request):
    infos=info.objects.all()
    serializer=modelserializer(infos,many=True)
    return Response(serializer.data)
@api_view(['POST'])
def createinfo(request):
    serializer=modelserializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['GET'])
def getinfobyid(request,pk):
    infos=info.objects.get(id=pk)
    serializer=modelserializer(infos,many=False)
    return Response(serializer.data)