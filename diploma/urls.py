from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from user import views as u
from expense import views as e


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('main.urls')),
    path('login/', u.LoginUser.as_view(), name='login'),
    path('register/', u.RegisterUser.as_view(), name='register'),
    path('profile/', u.profile, name='profile'),
    path('expenses/', e.expenses, name='expenses'),
    path('update_expense/<int:id>/', e.update_expense, name='update_expense'),
    path('delete_expense/<int:id>/', e.delete_expense, name='delete_expense'),
    path('pdf/', e.pdf, name='pdf'),
    path('financial_statistics/', e.financial_statistics, name='financial_statistics'),
    path('diagrams/', e.diagrams, name='diagrams'),
    path('goals/', e.goals, name='goals'),  
    path('home/', e.home, name='home'),  
  
    path('delete_goal/<int:goal_id>/', e.delete_goal, name='delete_goal'),

] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
