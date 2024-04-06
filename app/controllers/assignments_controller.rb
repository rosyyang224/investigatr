class AssignmentsController < ApplicationController
    before_action :set_assignment, only: [:show, :edit, :update, :destroy]
    before_action :check_login
    authorize_resource
  
    def new
        @officer = Officer.find(params[:officer_id])
        @officer_investigations = Investigation.all - @officer.investigations
    end
  
    def create
      @assignment = Assignment.new(assignment_params)
      if @assignment.save
        flash[:notice] = "Successfully added assignment."
        redirect_to officer_path(@assignment.officer)
      else
        render action: 'new', locals: { officer: @assignment.officer }
      end
    end
  
    def terminate
        @assignment = Assignment.find(params[:id])
        @assignment.update_attribute(:end_date, Date.current)
        flash[:notice] = "Successfully terminated assignment."
        redirect_to officer_path(@assignment.officer)
    end
  
    private
  
    def set_officer
      @officer = Officer.find(params[:officer_id])
    end
  
    def set_assignment
      @assignment = Assignment.find(params[:id])
    end
  
    def assignment_params
      params.require(:assignment).permit(:officer_id, :investigation_id, :start_date, :end_date)
    end
  end
  