import store, product

# ==========================================================================================================================================================
# ==========================================================================================================================================================
# ==========================================================================================================================================================
# ==========================================================================================================================================================

soda = product.Product(name='Mountain Dew', price=1.89, category='Drink')
donut = product.Product(name='chocolate donut', price=.50, category='Food')
gas = product.Product(name='exxon', price=15.50, category='Fuel')
gasStation1 = store.Store("RaceTrac")

# soda.update_price(.33, True)
gasStation1.add_product(soda.print_info())
gasStation1.add_product(donut.print_info())
gasStation1.add_product(gas.print_info())

print(gasStation1.products)
gasStation1.inflation(.05)
print(gasStation1.products)
gasStation1.set_clearance('Food',.5)
gasStation1.sell_product(0)
print(gasStation1.products)

