from django.urls import path
from .views import *

app_name='main'
urlpatterns=[
    path('',showmain,name='showmain'),
    path('serivce1',service1,name='service1'),
    path('serivce2',service2,name='service2'),
    path('serivce3',service3,name='service3'),
    path('low',low,name='low'),
    path('high',high,name='high'),
    path('board',board,name='board'),
    path('request_detail/<str:id>',request_detail,name='request_detail'),
    path('request_new',request_new,name='request_new'),
    path('request_edit/<str:id>',request_edit,name='request_edit'),
    path('request_update/<str:id>',request_update,name='request_update'),
    path('request_delete/<str:id>',request_delete,name='request_delete'),
    path('request_create',request_create,name='request_create'),


]