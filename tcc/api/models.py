from django.db import models
class info(models.Model):
    name=models.CharField(max_length=50)
    email=models.EmailField(default="huehue@gmail.com" ,unique=True)
    enrollment=models.IntegerField(unique=True)
    department=models.CharField(max_length=50,default="Not Specified")
    experience=models.CharField(max_length=200, default="Not Specified")
    created_at=models.DateTimeField(auto_now_add=True)
