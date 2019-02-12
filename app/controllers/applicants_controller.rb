class ApplicantsController < ApplicationController
  def index
    @applicants = Applicant.find(params[:recruiter_id])
  end

  def destroy
  end

  def update
  end

  def create
  end

  private

  def applicant_params
    params.require(:applicant).permit(:recruiter_id, :name, :position, :status, :location. :type, :date, :traveling)
  end
end
