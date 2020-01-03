class UsersController < ApplicationController
  def index
    render text: 'What do you want me to say?'
  end

  def new
  end

  def hello
    render text: 'Hello CodingDojo'
  end
  def sayHello
    render text: 'Saying Hello!'
  end

  def say
    
  end

  def test
    puts params[:name]
    render text: "Saying Hello "+ params[:name].capitalize!.to_s + "!"
  end

  def times
    unless session[:visits]
      session[:visits] = 1
      puts session[:visits]
    else
      session[:visits]+=1
      puts session[:visits]
    end
    render text: "You visited this url " + session[:visits].to_s + "time(s)"
  end

  def reset
    reset_session
    render text: "Destroyed the session!"
  end

  def bye
    render text: "This is for jimmy"
  end 

  def byeyou
    redirect_to '/bye/bye/jimmy'
  end 


end