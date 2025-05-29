from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=60) 
    
    def __str__(self):
        return self.name
    
class Recipe(models.Model):
    name = models.CharField(max_length=120)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='recipes')
    ingredients = models.TextField()
    description = models.TextField()
    
    def __str__(self):
        return self.name
    