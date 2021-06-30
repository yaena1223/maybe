from django.db import models

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