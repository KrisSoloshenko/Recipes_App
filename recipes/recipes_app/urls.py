from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, RecipeViewSet


router = DefaultRouter()
router.register(r'categories', CategoryViewSet, basename='category')
router.register(r'recipes', RecipeViewSet, basename='recipe')
router.register(r'categories/(?P<category_id>\d+)/recipes', RecipeViewSet, basename='category-recipes')

urlpatterns = [
   path('', include(router.urls)),
]