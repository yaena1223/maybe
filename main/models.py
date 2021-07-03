from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Song(models.Model):
    title = models.CharField(max_length=200)
    singer = models.CharField(max_length=200)
    song_max = models.FloatField()
    song_min = models.FloatField()
    woman_max = models.FloatField()
    woman_min = models.FloatField()
    man_mix = models.FloatField()
    man_min = models.FloatField()
    img = models.ImageField(upload_to='blog/',blank=True,null=True)

    def __str__(self):
        return self.title

class Board(models.Model):
    id = models.AutoField(primary_key=True)
    singer = models.CharField(max_length=2000)
    song = models.CharField(max_length=2000)
    extra = models.CharField(max_length=2000)
    writer = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateTimeField()
    body = models.TextField()
    

    def __str__(self):
        return self.song


    def summary(self):
        return self.body[:10] 

class Comment(models.Model):
  content = models.TextField()
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now = True)
  writer = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
  question = models.ForeignKey(Board, on_delete = models.CASCADE, related_name='comments')