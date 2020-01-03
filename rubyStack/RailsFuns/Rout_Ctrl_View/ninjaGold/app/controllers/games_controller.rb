class GamesController < ApplicationController
  def index
    unless session[:totalGold]
      session[:totalGold] = 0
    end
    @gold = session[:totalGold]
  end

  def create
    building = params[:building]
    
    if building == 'farm'
      randomGold = rand(10..20)
    end
    if building == 'cave'
      randomGold = rand(5..10)
    end
    if building == 'house'
      randomGold = rand(2..5)
    end
    if building == 'casino'
      randomGold = rand(-50..50)
    end
    session[:totalGold] += randomGold
    redirect_to '/games'
  end

  def reset
    reset_session
    redirect_to '/games'
  end
end 
