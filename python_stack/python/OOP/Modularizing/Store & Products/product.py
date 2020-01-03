class Product:
    def __init__(self, name, price, category):
        self.name = name
        self.price = price
        self.category = category

    def update_price(self, percent_change, is_increased):
        if is_increased == True:
            self.price = self.price*(1+percent_change)
            print(self.name+' price increased: New price = '+str(self.price))
        else:
            print('price not increased')
        return self

    def print_info(self):
        product_attr = {'name': self.name, 'price': self.price, 'category': self.category}
        print('Name: '+self.name+'\nPrice: '+str(self.price)+'\nCategory: '+self.category+'\n')
        return product_attr

