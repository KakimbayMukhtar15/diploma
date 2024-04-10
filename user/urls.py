from django.contrib import admin
from django.urls import path
from django.conf.urls.static import static,settings
from user import views
from .views import LoginUser
from .views import RegisterUser
from .views import ShowPost



urlpatterns = [
    path('login/', views.LoginUser.as_view(), name='login'),
    path('register/', views.register, name='register'),
    path('profile/', views.profile, name='profile'),
]
