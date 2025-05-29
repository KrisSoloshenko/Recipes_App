from django.shortcuts import render
from .models import Category, Recipe
from .serializers import CategorySerializer, RecipeSerializer
from rest_framework.viewsets import ModelViewSet


class CategoryViewSet(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    

class RecipeViewSet(ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    
    def get_queryset(self):
        category_id = self.kwargs.get('category_id')
        if category_id:
            return Recipe.objects.filter(category_id=category_id)
        return Recipe.objects.all()