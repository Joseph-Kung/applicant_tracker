class RecruitersController < ApplicationController
  def index
    @recruiters = Recruiter.all
    render :index
  end

  def create
    @recruiter = Recruiter.new(recruiter_params)

    if @recruiter.save
      render :show
    else
      render json: @recruiter.errors.full_messages, status: 400
    end
  end

  def show
    @recruiter = Recruiter.find(params[:id])

    if @recruiter
      render :show
    else
      render json ['Recruiter does not exit'], status: 400
    end

  end

  def destroy
    @recruiter = Recruiter.find(params[:id])

    if @recruiter
      @recruiter.destroy
      render :show
    else
      render json ['Recruiter does not exit'], status: 400
    end
  end

  def update
    @recruiter = Recruiter.find(params[:id])

    if @recruiter.update_attributes(recruiter_params)
      render :show
    else
      render json ['Recruiter does not exit'], status: 400
    end
  end

  private
  
  def recruiter_params
    params.require(:recruiter).permit(:name, :team)
  end
end