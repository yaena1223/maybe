from django.shortcuts import render,get_object_or_404
from .models import Song

# Create your views here.
def showmain(request):
    songs = Song.objects.all()
    return render(request, 'main/mainpage.html',{'songs':songs})