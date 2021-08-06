from django.urls import path
from .views import *

app_name='main'
urlpatterns=[
    path('',showmain,name='showmain'),
    path('serivce1',service1,name='service1'),
    path('serivce2',service2,name='service2'),
    path('serivce3',service3,name='service3'),
    path('low',low,name='low'),
    path('low_level1',low_level1,name='low_level1'),
    path('low_level2',low_level2,name='low_level2'),
    path('low_level3',low_level3,name='low_level3'),
    path('high',high,name='high'),
    path('high_level1',high_level1,name='high_level1'),
    path('high_level2',high_level2,name='high_level2'),
    path('high_level3',high_level3,name='high_level3'),
    path('board',board,name='board'),
    path('request_detail/<str:id>',request_detail,name='request_detail'),
    path('request_new',request_new,name='request_new'),
    path('request_edit/<str:id>',request_edit,name='request_edit'),
    path('request_update/<str:id>',request_update,name='request_update'),
    path('request_delete/<str:id>',request_delete,name='request_delete'),
    path('request_create',request_create,name='request_create'),
    path('<str:board_id>/create_comment',create_comment,name='create_comment'),
    path('<str:comment_id>/edit_comment',edit_comment,name='edit_comment'),
    path('<str:comment_id>/update_comment',update_comment,name='update_comment'),
    path('<str:comment_id>/delete_comment',delete_comment,name='delete_comment'),
    path('like_toggle/<int:board_id>/',like_toggle,name="like_toggle")
]