from django.shortcuts import render,HttpResponse
 

# Create your views here.

def index(request):
    return render(request, 'index.html') 

def about(request):
    return render(request, 'about.html')

def login(request):
    return render(request, 'login.html')

def signup(request):
    return render(request, 'signup.html')   

def booking(request):
    return render(request, 'booking.html')         