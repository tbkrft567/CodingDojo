class DojosController < ApplicationController
  def index
    @dojos = Dojo.all
    @counter = Dojo.count
  end
  def new
    
  end
  def create
    Dojo.create(newDojo)
    redirect_to '/dojos/index'
  end
  def show
    @dojo = Dojo.find_by(id:params[:id])
    @students = Student.where(dojo:Dojo.find(params[:id]))
  end
  def destroy
    dojoDestroy = Dojo.find(params[:id])
    dojoDestroy.destroy
    redirect_to '/dojos/index'
  end
  def edit
    @dojo = Dojo.find(params[:id])
  end
  def update
    @dojo = Dojo.find(params[:id])
    @dojo.update(newDojo)
    redirect_to '/dojos/index'
  end
  private
    def newDojo
      params.required(:dojo).permit(:branch, :street, :city, :state)
    end

end
