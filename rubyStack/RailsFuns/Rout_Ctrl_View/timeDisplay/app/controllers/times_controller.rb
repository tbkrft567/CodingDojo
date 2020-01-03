require 'time'
class TimesController < ApplicationController
  def main
    @date = Time.now
    @Format_date = @date.to_formatted_s(:long_ordinal)
    # puts @date.strptime('%m/%d/%Y')
  end
end
