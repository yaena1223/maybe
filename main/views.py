from django.shortcuts import render,get_object_or_404
from .models import Song

# Create your views here.
def showmain(request):
    songs = Song.objects.all()
    return render(request, 'main/mainpage.html',{'songs':songs})

def service1(request):
    return render(request,'main/service1.html')

def service2(request):
    return render(request,'main/service2.html')

def service3(request):
    return render(request,'main/service3.html')

def board(request):
    return render(request,'main/board.html')