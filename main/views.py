from django.shortcuts import render,get_object_or_404,redirect
from .models import *
from django.utils import timezone
from django.contrib.auth.decorators import login_required
# 2-1 POST 형식의 HTTP 통신만 받기
from django.views.decorators.http import require_POST
# 2-2 response를 변환하는 가장 가본 함수, html 파일, 이미지 등 다양한 응답
from django.http import HttpResponse
# 2-3 딕셔너리를 json 형식으로 바꾸기 위해
import json

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

def low_level1(request):
    return render(request,'main/low_level1.html')

def low_level2(request):
    return render(request,'main/low_level2.html')

def low_level3(request):
    return render(request,'main/low_level3.html')

def high(request):
    return render(request,'main/high.html')

def high_level1(request):
    return render(request,'main/high_level1.html')

def high_level2(request):
    return render(request,'main/high_level2.html')

def high_level3(request):
    return render(request,'main/high_level3.html')


def board(request):
    boards = Board.objects.all().order_by('-date')
    return render(request, 'main/board.html',{'boards':boards})

def request_detail(request,id):
    board = get_object_or_404(Board,pk=id)
    all_comments = board.comments.all().order_by('-created_at')
    return render(request,'main/request_detail.html',{'board':board,'comments':all_comments})

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

def create_comment(request, board_id):
	if request.method == "POST":
		board = get_object_or_404(Board, pk=board_id)
		current_user = request.user
		comment_content = request.POST.get('content')
		Comment.objects.create(content=comment_content, writer=current_user, board=board)
	return redirect('main:request_detail', board_id)

def edit_comment(request,comment_id):
    edit_comment = Comment.objects.get(id = comment_id)
    return render(request,'main/edit_comment.html',{'comment':edit_comment})

def update_comment(request,comment_id):
    update_comment = get_object_or_404(Comment, pk = comment_id)
    update_comment.writer = request.user
    update_comment.content = request.POST['content']
    update_comment.save()
    return redirect('main:request_detail',update_comment.board.id)

def delete_comment(request,comment_id):
    delete_comment = get_object_or_404(Comment,pk = comment_id)
    delete_comment.delete()
    return redirect('main:request_detail', delete_comment.board.id)


# 3. like_toggle 함수 작성하기

@require_POST
@login_required
def like_toggle(request,board_id):
    board= get_object_or_404(Board,pk=board_id)
    board_like,board_like_created = Like.objects.get_or_create(user=request.user,board=board)

    if not board_like_created:
        board_like.delete()
        result = "like_cancel"
    else:
        result = "like"
        
    context={
        "like_count":board.like_count,
         "result":result
    }
    return HttpResponse(json.dumps(context),content_type="application/json")