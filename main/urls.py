from django.urls import path
from .views import *

app_name='main'
urlpatterns=[
    path('',showmain,name='showmain'),
    path('serivce1',service1,name='service1'),
    path('serivce2',service2,name='service2'),
    path('serivce3',service3,name='service3'),
    path('board',board,name='board'),
    path('low',low,name='low'),
    path('high',high,name='high'),
]