from typing import ContextManager
from django.db import models
from django.contrib.auth.models import User
from django.conf import settings
from django.dispatch import receiver
from django.db.models.signals import post_save


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
    like_user_set = models.ManyToManyField(User, blank=True, related_name='likes_user_set',through='Like')

    @property
    def like_count(self):
        return self.like_user_set.count()
    

    def __str__(self):
        return self.song


    def summary(self):
        return self.body[:10] 

class Comment(models.Model):
	content = models.TextField()
	writer = models.ForeignKey(User, on_delete=models.CASCADE)
	board = models.ForeignKey(Board, on_delete=models.CASCADE, related_name='comments')
	created_at = models.DateTimeField(auto_now_add = True)
	updated_at = models.DateTimeField(auto_now = True)

class Like(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    board = models.ForeignKey(Board, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together =(('user', 'board'))