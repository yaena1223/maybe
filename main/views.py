from django.shortcuts import render,get_object_or_404,redirect
from .models import Song,Board
from django.utils import timezone


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

def low(request):
    return render(request,'main/low.html')

def high(request):
    return render(request,'main/high.html')

def board(request):
    boards = Board.objects.all()
    return render(request, 'main/board.html',{'boards':boards})

def request_detail(request,id):
    board = get_object_or_404(Board,pk=id)
    return render(request,'main/request_detail.html',{'board':board})

def request_new(request):
    return render(request,'main/request_new.html')

def request_create(request):
    request_new_post = Board()
    request_new_post.song = request.POST['song']
    request_new_post.singer = request.POST['singer']
    request_new_post.writer = request.user
    request_new_post.date = timezone.now()
    request_new_post.extra = request.POST['extra']
    request_new_post.save()
    return redirect('main:request_detail',request_new_post.id)

def request_edit(request,id):
    request_edit_post = Board.objects.get(id = id)
    return render(request, 'main/request_edit.html', {'board':request_edit_post})

def request_update(request,id):
    request_update_post = get_object_or_404(Board, id = id)
    request_update_post.singer = request.POST['singer']
    request_update_post.song = request.POST['song']
    request_update_post.writer = request.user
    request_update_post.date = timezone.now()
    request_update_post.extra = request.POST['extra']
    request_update_post.save()
    return redirect('main:request_detail',request_update_post.id)

def request_delete(request,id):
    request_delete_post = Board.objects.get(id = id)
    request_delete_post.delete()
    return redirect('main:board')

