class Api::BenchController < ApplicationController

  def index
    # @bench = Bench.filter(params[:bounds]);
    @bench = Bench.filter(params[:benches]);
  end

  def create
    @bench = Bench.new(bench_params)
    if @bench.save
      render :show
    else
      render json: @bench.errors.full_messages, status: 422
    end
  end

  def show
    @bench = Bench.find(params[id])
  end

  private
    def bench_params
      params.require(:bench).permit(:lat, :lng, :description, :bounds, :minSeats, :maxSeats)
    end

end
