class ApplicantsController < ApplicationController
  def index
    @applicants = Applicant.find(params[:recruiter_id])
    render :index
  end

  def destroy
    @applicant = Applicant.find(params[:id])

    if @applicant
      @applicant.destroy
      render :show
    else
      render json: ['There was no applicant found'], status: 400
    end
  end

  def update
    @applicant = Applicant.find(params[:id])

    if @applicant.update_attributes(applicant_params)
      render :show
    else
      render @applicant.errors.full_messages, status: 400
    end
  end

  def create
    @applicant = Applicant.new(applicant_params)

    if @applicant.save
      render :show
    else
      render @applicant.errors.full_messages, status: 400
    end
  end

  private

  def applicant_params
    params.require(:applicant).permit(:recruiter_id, :name, :position, :status, :location. :type, :date, :traveling)
  end
end
