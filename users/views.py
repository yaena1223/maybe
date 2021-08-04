from django.shortcuts import render, get_object_or_404
from main.models import Board
from django.contrib.auth.models import User
# Create your views here.

def mypage(request, id):
    user = get_object_or_404(User,pk=id)
    context={
        'user':user,
        'boards': Board.objects.filter(writer=user),
    }
    return render(request,'users/mypage.html',context)
