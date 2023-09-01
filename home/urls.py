from django.urls import path ,include
from . import views
from django.conf import settings
from django.conf.urls.static import static

app_name = 'home'

urlpatterns =[
    path('', views.index,name='index'),
    path('about/', views.about,name='about'),
    path('login/', views.login,name='login'),
    path('signup/', views.signup,name='signup'), 
    path('booking', views.booking,name='booking'), 
]
