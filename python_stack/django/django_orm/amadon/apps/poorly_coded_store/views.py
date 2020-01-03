from django.shortcuts import render, redirect
from .models import Order, Product


def index(request):
    context = {
        "all_products": Product.objects.all(),
    }

    # O = Order.objects.all()
    # O.delete()
    # request.session.flush()

    return render(request, "store/index.html", context)


def checkout(request, productId):
    if float(request.POST['price']) == float(Product.objects.get(id=productId).price):

        quantity_from_form = int(request.POST["quantity"])
        price_from_form = float(request.POST["price"])
        total_charge = quantity_from_form * price_from_form

        request.session['OrderPrice'] = total_charge


        if 'totalQuantity' not in request.session:
            request.session['totalQuantity'] = quantity_from_form
        else:
            request.session['totalQuantity']+=quantity_from_form
        
        if 'totalCharge' not in request.session:
            request.session['totalCharge'] = (price_from_form*quantity_from_form)
        else:
            request.session['totalCharge']+=total_charge

        Order.objects.create(quantity_ordered=quantity_from_form,total_price=total_charge)
    else:
        return redirect('/')

    return redirect('/summaryPage')

def summaryPage(request):
    context = {
        "OrderPrice": request.session['OrderPrice'],
        "totalQuantity": request.session['totalQuantity'],
        "TotalOrderPrice": request.session['totalCharge'],
    }

    return render(request, 'store/checkout.html', context)