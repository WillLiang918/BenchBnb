class Api::BenchController < ApplicationController

  def index
    @bench = Bench.all();
    render :json # use jbuilder
  end

  def create
    @bench = Bench.new(bench_params)
    @bench.save!
    render :json @bench # user jbuilder
  end

  private
    def bench_params
      params.require(:bench).permit(:lat, :lng)
    end

end
