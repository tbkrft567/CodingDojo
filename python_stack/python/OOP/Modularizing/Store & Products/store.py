class Store:
    def __init__(self, name):
        self.name = name
        self.products = []

    def add_product(self, new_product):
        self.products.append(new_product)
    
    def sell_product(self, id):
        i=id
        while(i<len(self.products)-1):
            self.products[i],self.products[i+1] = self.products[i+1],self.products[i]
            i+=1
        self.products.pop()
    
    def inflation(self, percent_increase):
        for i in range(len(self.products)):
            self.products[i]['price'] = self.products[i]['price'] *(1+percent_increase)

    def set_clearance(self, category, percent_discount):
        for i in range(len(self.products)):
            if self.products[i]['category']==category:
                self.products[i]['price'] = self.products[i]['price'] *(1-percent_discount)