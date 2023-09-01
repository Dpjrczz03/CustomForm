from rest_framework import serializers
from .models import info
class modelserializer(serializers.ModelSerializer):
    class Meta:
        model=info
        fields='__all__'